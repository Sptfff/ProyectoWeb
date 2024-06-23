const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mysqlConnection = require('../database');

router.get('/users',(req,res)=>{
    mysqlConnection.query('SELECT * FROM Usuario',(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});
router.get('/users/:idUsuario',(req,res)=>{
    const {idUsuario} = req.params;
    console.log(idUsuario);
    mysqlConnection.query('SELECT * FROM Usuario WHERE id = ?', [idUsuario], (err,rows,fields)=>{
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    });
});

router.post('/login', async (req, res) => {
    const { Correo, Pass } = req.body;
    if (!Correo || !Pass) {
        return res.status(400).json({ error: 'Correo y contraseña son requeridos.' });
    }

    try {
        mysqlConnection.query('SELECT * FROM Usuario WHERE Correo = ?', [Correo], async (err, rows, fields) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: 'Error en el servidor.' });
            }

            if (rows.length === 0) {
                return res.status(404).json({ error: 'Usuario no encontrado.' });
            }

            const user = rows[0];
            const passwordMatch = await bcrypt.compare(Pass, user.Pass);
            if (!passwordMatch) {
                return res.status(401).json({ error: 'Contraseña incorrecta.' });
            }

            res.json({ id: user.id, Nombre: user.Nombre, Correo: user.Correo });
        });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Error en el servidor.' });
    }
});


router.post('/users', async (req,res)=>{
    const {id, Nombre, Rut, Correo, nombreCiudad, nombreRegion, 
        Pass, Sexo, Peso, Altura, FechaNac, Objetivo, ActividadFisica,
        Activo, esAdmin} = req.body;

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(Pass, saltRounds);


    const query = `
        CALL UsuarioAddOrEdit(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);
    `;
    mysqlConnection.query(query,[id, Nombre, Rut, Correo, nombreCiudad, nombreRegion, 
                                hashedPassword, Sexo, Peso, Altura, FechaNac, Objetivo, ActividadFisica,
                                Activo, esAdmin],(err,rows,fields)=>{
        if(!err){
            const userId = rows[0][0].id; // Suponiendo que la respuesta es un array de arrays y el id está en el primer objeto
            res.json({ Status: 'Usuario Agregado', id: userId });
        }else{
            console.log(err);
        }
    });
});
router.put('/users/:idUsuario',(req,res)=>{
    const {Nombre, Rut, Correo, nombreCiudad, nombreRegion, 
        Pass, Sexo, Peso, Altura, FechaNac, Objetivo, ActividadFisica,
        Activo, esAdmin} = req.body;
    const {idUsuario} = req.params;
    const query = 'CALL UsuarioAddOrEdit(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    
    mysqlConnection.query(query,[idUsuario, Nombre, Rut, Correo, nombreCiudad, nombreRegion, 
        Pass, Sexo, Peso, Altura, FechaNac, Objetivo, ActividadFisica,
        Activo, esAdmin],(err,rows,fields)=>{
        if(!err){
            const userId = rows[0][0].id; // Suponiendo que la respuesta es un array de arrays y el id está en el primer objeto
            res.json({ Status: 'Usuario actualizado', id: userId });
        }else{
            console.log(err);
        }
    });
});
router.delete('/users/:idUsuario',(req,res)=>{
    const {idUsuario} = req.params;
    mysqlConnection.query('Update Usuario Set Activo = 0 WHERE id = ?', [idUsuario], (err,rows,fields)=>{
        if(!err){
            res.json({Status: 'Cuenta desactivada'});
        }else{
            console.log(err);
        }
    });
});

module.exports = router
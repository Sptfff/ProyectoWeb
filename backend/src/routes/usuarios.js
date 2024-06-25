const express = require('express');
const jwt = require('jsonwebtoken');
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


router.post('/users/login', async (req,res)=>{
    const {Correo, Pass} = req.body;

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
            const token = jwt.sign({
                email: user.Correo
            },
                'palabramuysecreta',
                {
                    expiresIn: "1h"
                }
            )            
            res.json({ Status: 'Usuario encontrado', id: token });
        });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Error en el servidor.' });
    }
});

router.post('/users/registro', async (req,res)=>{
    const {Nombre, Rut, Correo, nombreCiudad, nombreRegion, Pass} = req.body;
    const Sexo = 0;
    const Peso = 0;
    const Altura = 0;
    const FechaNac = '1990-01-01';
    const Objetivo = 1;
    const ActividadFisica = 1;
    const id = 0;
    const Activo = 1;
    const esAdmin = 0;

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(Pass, saltRounds);


    const query = `
        CALL UsuarioAddOrEdit(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);
    `;
    mysqlConnection.query(query,[id, Nombre, Rut, Correo, nombreCiudad, nombreRegion, 
                                hashedPassword, Sexo, Peso, Altura, FechaNac, Objetivo, ActividadFisica,
                                Activo, esAdmin],(err,rows,fields)=>{
        if(!err){
            const newUser = rows[0];
            const token = jwt.sign({
                email: newUser.Correo,
            },
                'palabramuysecreta',
                {
                    expiresIn: "1h"
                }
            )            
            res.json({ Status: 'Usuario Agregado', id: token });
        }else{
            console.log(err);
        }
    });
});

const verifyToken = (req,res,next) => {
    let token = req.headers.authorization

    if(!token){
        return res.status(401).json({error: "Token no encontrado"});
    }
    token = token.split(" ")[1]
    try{
        const{ email } = jwt.verify(token, 'palabramuysecreta')
        req.email = email
        next();
    } catch (error){
        return res.status(400).json({error: "Token invalido"});
    }
}
router.get('/perfil', verifyToken, async(req, res) => {
    try{
        mysqlConnection.query('SELECT * FROM Usuario WHERE Correo = ?', [req.email], async (err, rows, fields) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: 'Error en el servidor.' });
            }

            if (rows.length === 0) {
                return res.status(404).json({ error: 'Usuario no encontrado.' });
            }

        const user = rows[0];


        res.json({ Status: 'hay token', msg: user});
    });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, msg:'error server'});
    }
});

router.put('/users/editar',verifyToken, async(req,res)=>{
    const {Sexo, Peso, Altura, FechaNac, Objetivo, ActividadFisica} = req.body;
    try{
        mysqlConnection.query('SELECT * FROM Usuario WHERE Correo = ?', [req.email], async (err, rows, fields) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: 'Error en el servidor.' });
            }

            if (rows.length === 0) {
                return res.status(404).json({ error: 'Usuario no encontrado.' });
            }

            const user = rows[0];
            userID = user.id;

            mysqlConnection.query(`
                UPDATE Usuario 
                SET
                    Sexo = ?,
                    Peso = ?,
                    Altura = ?,
                    Objetivo = ?,
                    ActividadFisica = ?,
                    FechaNac = ?
                WHERE id = ?;`, [Sexo, Peso, Altura, Objetivo, ActividadFisica, FechaNac, userID], async (err, rows, fields) => {

                    if (err) {
                        console.log(err);
                        return res.status(500).json({ error: 'Error en el servidor.' });
                    }
    
                    if (rows.length === 0) {
                        return res.status(404).json({ error: 'Usuario no encontrado.' });
                    }
            });
            res.json({ Status: 'actualizado!', msg: req.body });
            
        });
    }  catch {
        res.json(err);
    }
    
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
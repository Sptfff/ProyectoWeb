const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/',(req,res)=>{
    mysqlConnection.query('SELECT * FROM Usuario',(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});
router.get('/:idUsuario',(req,res)=>{
    const {idUsuario} = req.params;
    console.log(idUsuario);
    mysqlConnection.query('SELECT * FROM Usuario WHERE idUsuario = ?', [idUsuario], (err,rows,fields)=>{
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    });
});
router.post('/',(req,res)=>{
    const {idUsuario,Nombre,Sexo,Altura,Peso,FechaNac,Objetivo,ActividadFisica,Pass,idCiudad,Activo} = req.body;
    const query = `
        CALL UsuarioAddOrEdit(?,?,?,?,?,?,?,?,?,?,?);
    `;
    mysqlConnection.query(query,[idUsuario,Nombre,Sexo,Altura,Peso,FechaNac,Objetivo,ActividadFisica,Pass,idCiudad,Activo],(err,rows,fields)=>{
        if(!err){
            res.json({Status: 'Usuario guardado'})
        }else{
            console.log(err);
        }
    });
});
router.put('/:idUsuario',(req,res)=>{
    const {Nombre,Sexo,Altura,Peso,FechaNac,Objetivo,ActividadFisica,Pass,idCiudad,Activo} = req.body;
    const {idUsuario} = req.params;
    const query = 'CALL UsuarioAddOrEdit(?,?,?,?,?,?,?,?,?,?,?)';
    
    mysqlConnection.query(query,[idUsuario,Nombre,Sexo,Altura,Peso,FechaNac,Objetivo,ActividadFisica,Pass,idCiudad,Activo],(err,rows,fields)=>{
        if(!err){
            res.json({Status: 'Usuario actualizado'})
        }else{
            console.log(err);
        }
    });
});
router.delete('/:idUsuario',(req,res)=>{
    const {idUsuario} = req.params;
    mysqlConnection.query('DELETE FROM Usuario WHERE idUsuario = ?', [idUsuario], (err,rows,fields)=>{
        if(!err){
            res.json({Status: 'Usuario eliminado'});
        }else{
            console.log(err);
        }
    });
});

module.exports = router
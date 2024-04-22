/*SCRIPT JS PARA VALIDAR EL INICIO DE SESIÓN DE USUARIO */

$(document).ready(() => { /* si el documento carga...arroja el mensaje en la consola */
    console.log("inicio_sesion.js cargado");
  
    // Se comienza la validación del formulario usando JQuery Validator
  
    $("#sesion").validate({ 
      rules: { //reglas para la validación: que el nombre y password sean obligatorios
        nombre: {
          required: true,
        },
        password: {
          required: true,
        },
      },
      messages: {
        nombre: {
          required: "El nombre es obligatorio",
          nombre: "El nombre no es válido",
        },
        password: {
          required: "La contraseña es obligatoria",
        },
      },
      submitHandler: () => { /* creamos una tabla de valores y la mostramos por consola con lo que mandó el usuario */
        const nombre = $("#nombre").val();
        const password = $("#password").val();
        console.table({ nombre, password });
      },
    });
  });
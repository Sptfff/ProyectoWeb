$(document).ready(() => {
    console.log("inicio_sesion.js cargado");
  
    // Se comienza la validación del formulario usando JQuery Validator
  
    $("#sesion").validate({
      rules: {
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
      submitHandler: () => {
        const nombre = $("#nombre").val();
        const password = $("#password").val();
        console.table({ nombre, password });
      },
    });
  });
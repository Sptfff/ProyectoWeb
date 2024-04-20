$(document).ready(() => {
    console.log("inicio_sesion.js cargado");
  
    // Se comienza la validación del formulario usando JQuery Validator
  
    $("#inicio_sesion").validate({
      rules: {
        nombre: {
          required: true,
          nombre: true,
        },
        password: {
          required: true,
        },
      },
      messages: {
        nombre: {
          required: "El email es obligatorio",
          nombre: "El email no es válido",
        },
        password: {
          required: "La contraseña es obligatoria",
        },
      },
      submitHandler: () => {
        const email = $("#nombre").val();
        const password = $("#password").val();
        console.table({ nombre, password });
      },
    });
  });
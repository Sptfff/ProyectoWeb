/*SCRIPT JS PARA VALIDAR EL registro DE USUARIO */


/*función para validar el digito verificador del rut de un usuario:*/
function validaDV(rut) {
    // Se separa el número del dígito verificador
    const [numero, dv] = rut.replace("-K", "-k").split("-");
  
    // Aquí se debe aplicar módulo 11. La función se extrajo de:
    // https://validarutchile.cl/calcular-rut-en-javascript.php
    // ! OJO: Es una función que se llama a sí misma.
    const dvVer = ((T) => {
      let M = 0,
        S = 1;
      for (; T; T = Math.floor(T / 10)) S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
      return S ? S - 1 : "k";
    })(numero);
  
    // Se compara el dígito verificador calculado con el ingresado
    return dvVer == dv;
  }
  
  /**
   * Se agregan las reglas personalizadas al plugin jQuery Validation. Se
   * encargan de validar el formato (sin puntos, con guión) y el dígito verificador.
   * @see https://jqueryvalidation.org/
   */
  $.validator.addMethod(
    "rut",
    function (value, element) {
      return this.optional(element) || /^[0-9]{7,8}-[0-9Kk]{1}$/.test(value);
    },
    "El RUT ingresado es inválido"
  );
  
  $.validator.addMethod(
    "rutdv",
    function (value, element) {
      return this.optional(element) || validaDV(value);
    },
    "El dígito verificador del RUT es inválido"
  );
  
  $(document).ready(() => { // si el documento ha cargado ... muestra el mensaje por consola
    console.log("registro.js cargado");
  
    // Se cargan las comunas de Chile
    $("#region").change((e) => {
      $("#comuna").empty(); // Limpiar las opciones anteriores de comunas
      const regionSeleccionada = $("#region").find(":selected").val(); // Obtener el valor de la región seleccionada
        if (regionSeleccionada === "1") {
            $("#comuna").append('<option value="1">Iquique</option>');
            $("#comuna").append('<option value="2">Alto Hospicio</option>');
            $("#comuna").append('<option value="3">Pozo Almonte</option>');
            $("#comuna").append('<option value="4">Camiña</option>');
            $("#comuna").append('<option value="5">Colchane</option>');
            $("#comuna").append('<option value="6">Huara</option>');
            $("#comuna").append('<option value="7">Pica</option>');
        } else if (regionSeleccionada === "2") {
            $("#comuna").append('<option value="1">Antofagasta</option>');
            $("#comuna").append('<option value="2">Mejillones</option>');
            $("#comuna").append('<option value="3">Sierra Gorda</option>');
            $("#comuna").append('<option value="4">Taltal</option>');
            $("#comuna").append('<option value="5">Calama</option>');
            $("#comuna").append('<option value="6">Ollagüe</option>');
            $("#comuna").append('<option value="7">San Pedro de Atacama</option>');
            $("#comuna").append('<option value="8">Tocopilla</option>');
            $("#comuna").append('<option value="9">María Elena</option>');
        }else if (regionSeleccionada === "3") {
            $("#comuna").append('<option value="1">Copiapó</option>');
            $("#comuna").append('<option value="2">Caldera</option>');
            $("#comuna").append('<option value="3">Tierra Amarilla</option>');
            $("#comuna").append('<option value="4">Chañaral</option>');
            $("#comuna").append('<option value="5">Diego de Almagro</option>');
            $("#comuna").append('<option value="6">Vallenar</option>');
            $("#comuna").append('<option value="7">Alto del Carmen</option>');
            $("#comuna").append('<option value="8">Freirina</option>');
            $("#comuna").append('<option value="9">Huasco</option>');
        }else if (regionSeleccionada === "4") {
            $("#comuna").append('<option value="1">La Serena</option>');
            $("#comuna").append('<option value="2">Coquimbo</option>');
            $("#comuna").append('<option value="3">Andacollo</option>');
            $("#comuna").append('<option value="4">La Higuera</option>');
            $("#comuna").append('<option value="5">Paihuano</option>');
            $("#comuna").append('<option value="6">Vicuña</option>');
            $("#comuna").append('<option value="7">Illapel</option>');
            $("#comuna").append('<option value="8">Canela</option>');
            $("#comuna").append('<option value="9">Los Vilos</option>');
            $("#comuna").append('<option value="10">Salamanca</option>');
            $("#comuna").append('<option value="11">Ovalle</option>');
            $("#comuna").append('<option value="12">Combarbalá</option>');
            $("#comuna").append('<option value="13">Monte Patria</option>');
            $("#comuna").append('<option value="14">Punitaqui</option>');
            $("#comuna").append('<option value="15">Río Hurtado</option>');
        }else if (regionSeleccionada === "5") {
            $("#comuna").append('<option value="1">Valparaíso</option>');
            $("#comuna").append('<option value="2">Viña del Mar</option>');
            $("#comuna").append('<option value="3">Concón</option>');
            $("#comuna").append('<option value="4">Quilpué</option>');
            $("#comuna").append('<option value="5">Villa Alemana</option>');
            $("#comuna").append('<option value="6">Limache</option>');
            $("#comuna").append('<option value="7">Olmué</option>');
            $("#comuna").append('<option value="8">La Ligua</option>');
            $("#comuna").append('<option value="9">Cabildo</option>');
            $("#comuna").append('<option value="10">Papudo</option>');
            $("#comuna").append('<option value="11">Petorca</option>');
            $("#comuna").append('<option value="12">Zapallar</option>');
            $("#comuna").append('<option value="13">Quillota</option>');
            $("#comuna").append('<option value="14">La Calera</option>');
            $("#comuna").append('<option value="15">Hijuelas</option>');
            $("#comuna").append('<option value="16">La Cruz</option>');
            $("#comuna").append('<option value="17">Nogales</option>');
            $("#comuna").append('<option value="18">San Antonio</option>');
            $("#comuna").append('<option value="19">Algarrobo</option>');
            $("#comuna").append('<option value="20">Cartagena</option>');
            $("#comuna").append('<option value="21">El Quisco</option>');
            $("#comuna").append('<option value="22">El Tabo</option>');
            $("#comuna").append('<option value="23">Santo Domingo</option>');
            $("#comuna").append('<option value="24">San Felipe</option>');
            $("#comuna").append('<option value="25">Los Andes</option>');
            $("#comuna").append('<option value="26">Calle Larga</option>');
            $("#comuna").append('<option value="27">Rinconada</option>');
            $("#comuna").append('<option value="28">San Esteban</option>');
        }else if (regionSeleccionada === "13") {
            $("#comuna").append('<option value="1">Santiago</option>');
            $("#comuna").append('<option value="2">Cerrillos</option>');
            $("#comuna").append('<option value="3">Cerro Navia</option>');
            $("#comuna").append('<option value="4">Conchalí</option>');
            $("#comuna").append('<option value="5">El Bosque</option>');
            $("#comuna").append('<option value="6">Estación Central</option>');
            $("#comuna").append('<option value="7">Huechuraba</option>');
            $("#comuna").append('<option value="8">Independencia</option>');
            $("#comuna").append('<option value="9">La Cisterna</option>');
            $("#comuna").append('<option value="10">La Florida</option>');
            $("#comuna").append('<option value="11">La Granja</option>');
            $("#comuna").append('<option value="12">La Pintana</option>');
            $("#comuna").append('<option value="13">La Reina</option>');
            $("#comuna").append('<option value="14">Las Condes</option>');
            $("#comuna").append('<option value="15">Lo Barnechea</option>');
            $("#comuna").append('<option value="16">Lo Espejo</option>');
            $("#comuna").append('<option value="17">Lo Prado</option>');
            $("#comuna").append('<option value="18">Macul</option>');
            $("#comuna").append('<option value="19">Maipú</option>');
            $("#comuna").append('<option value="20">Ñuñoa</option>');
            $("#comuna").append('<option value="21">Pedro Aguirre Cerda</option>');
            $("#comuna").append('<option value="22">Peñalolén</option>');
            $("#comuna").append('<option value="23">Providencia</option>');
            $("#comuna").append('<option value="24">Pudahuel</option>');
            $("#comuna").append('<option value="25">Quilicura</option>');
            $("#comuna").append('<option value="26">Quinta Normal</option>');
            $("#comuna").append('<option value="27">Recoleta</option>');
            $("#comuna").append('<option value="28">Renca</option>');
            $("#comuna").append('<option value="29">San Joaquín</option>');
            $("#comuna").append('<option value="30">San Miguel</option>');
            $("#comuna").append('<option value="31">San Ramón</option>');
            $("#comuna").append('<option value="32">Vitacura</option>');
            $("#comuna").append('<option value="33">Puente Alto</option>');
            $("#comuna").append('<option value="34">Pirque</option>');
            $("#comuna").append('<option value="35">San José de Maipo</option>');
            $("#comuna").append('<option value="36">Colina</option>');
            $("#comuna").append('<option value="37">Lampa</option>');
            $("#comuna").append('<option value="38">Tiltil</option>');
        }else if (regionSeleccionada === "6") {
            $("#comuna").append('<option value="1">Rancagua</option>');
            $("#comuna").append('<option value="2">Codegua</option>');
            $("#comuna").append('<option value="3">Coinco</option>');
            $("#comuna").append('<option value="4">Coltauco</option>');
            $("#comuna").append('<option value="5">Doñihue</option>');
            $("#comuna").append('<option value="6">Graneros</option>');
            $("#comuna").append('<option value="7">Las Cabras</option>');
            $("#comuna").append('<option value="8">Machalí</option>');
            $("#comuna").append('<option value="9">Malloa</option>');
            $("#comuna").append('<option value="10">Mostazal</option>');
            $("#comuna").append('<option value="11">Olivar</option>');
            $("#comuna").append('<option value="12">Peumo</option>');
            $("#comuna").append('<option value="13">Pichidegua</option>');
            $("#comuna").append('<option value="14">Quinta de Tilcoco</option>');
            $("#comuna").append('<option value="15">Rengo</option>');
            $("#comuna").append('<option value="16">Requínoa</option>');
            $("#comuna").append('<option value="17">San Vicente</option>');
        }else if (regionSeleccionada === "7") {
            $("#comuna").append('<option value="1">Talca</option>');
            $("#comuna").append('<option value="2">Consitución</option>');
            $("#comuna").append('<option value="3">Curepto</option>');
            $("#comuna").append('<option value="4">Empedrado</option>');
            $("#comuna").append('<option value="5">Maule</option>');
            $("#comuna").append('<option value="6">Pelarco</option>');
            $("#comuna").append('<option value="7">Pencahue</option>');
            $("#comuna").append('<option value="8">Río Claro</option>');
            $("#comuna").append('<option value="9">San Clemente</option>');
            $("#comuna").append('<option value="10">San Rafael</option>');
            $("#comuna").append('<option value="11">Cauquenes</option>');
            $("#comuna").append('<option value="12">Chanco</option>');
            $("#comuna").append('<option value="13">Pelluhue</option>');
            $("#comuna").append('<option value="14">Curicó</option>');
            $("#comuna").append('<option value="15">Hualañé</option>');
            $("#comuna").append('<option value="16">Licantén</option>');
            $("#comuna").append('<option value="17">Molina</option>');
            $("#comuna").append('<option value="18">Rauco</option>');
            $("#comuna").append('<option value="19">Romeral</option>');
            $("#comuna").append('<option value="20">Sagrada Familia</option>');
            $("#comuna").append('<option value="21">Teno</option>');
            $("#comuna").append('<option value="22">Vichuquén</option>');
        }else if (regionSeleccionada === "16") {
            $("#comuna").append('<option value="1">Chillán</option>');
            $("#comuna").append('<option value="2">Bulnes</option>');
            $("#comuna").append('<option value="3">Chillán Viejo</option>');
            $("#comuna").append('<option value="4">Cobquecura</option>');
            $("#comuna").append('<option value="5">Coelemu</option>');
            $("#comuna").append('<option value="6">Coihueco</option>');
            $("#comuna").append('<option value="7">El Carmen</option>');
            $("#comuna").append('<option value="8">Ninhue</option>');
            $("#comuna").append('<option value="9">Ñiquén</option>');
            $("#comuna").append('<option value="10">Pemuco</option>');
            $("#comuna").append('<option value="11">Pinto</option>');
            $("#comuna").append('<option value="12">Portezuelo</option>');
            $("#comuna").append('<option value="13">Quillón</option>');
            $("#comuna").append('<option value="14">Quirihue</option>');
            $("#comuna").append('<option value="15">Ránquil</option>');
            $("#comuna").append('<option value="16">San Carlos</option>');
            $("#comuna").append('<option value="17">San Fabián</option>');
            $("#comuna").append('<option value="18">San Ignacio</option>');
            $("#comuna").append('<option value="19">San Nicolás</option>');
            $("#comuna").append('<option value="20">Treguaco</option>');
            $("#comuna").append('<option value="21">Yungay</option>');
        }else if (regionSeleccionada === "8") {
            $("#comuna").append('<option value="1">Concepción</option>');
            $("#comuna").append('<option value="2">Coronel</option>');
            $("#comuna").append('<option value="3">Chiguayante</option>');
            $("#comuna").append('<option value="4">Florida</option>');
            $("#comuna").append('<option value="5">Hualqui</option>');
            $("#comuna").append('<option value="6">Lota</option>');
            $("#comuna").append('<option value="7">Penco</option>');
            $("#comuna").append('<option value="8">San Pedro de la Paz</option>');
            $("#comuna").append('<option value="9">Santa Juana</option>');
            $("#comuna").append('<option value="10">Talcahuano</option>');
            $("#comuna").append('<option value="11">Tomé</option>');
            $("#comuna").append('<option value="12">Hualpén</option>');
            $("#comuna").append('<option value="13">Lebu</option>');
            $("#comuna").append('<option value="14">Arauco</option>');
            $("#comuna").append('<option value="15">Cañete</option>');
            $("#comuna").append('<option value="16">Contulmo</option>');
            $("#comuna").append('<option value="17">Curanilahue</option>');
            $("#comuna").append('<option value="18">Los Álamos</option>');
            $("#comuna").append('<option value="19">Tirúa</option>');
            $("#comuna").append('<option value="20">Los Ángeles</option>');
            $("#comuna").append('<option value="21">Antuco</option>');
            $("#comuna").append('<option value="22">Cabrero</option>');
            $("#comuna").append('<option value="23">Laja</option>');
            $("#comuna").append('<option value="24">Mulchén</option>');
            $("#comuna").append('<option value="25">Nacimiento</option>');
            $("#comuna").append('<option value="26">Negrete</option>');
            $("#comuna").append('<option value="27">Quilaco</option>');
            $("#comuna").append('<option value="28">Quilleco</option>');
            $("#comuna").append('<option value="29">San Rosendo</option>');
            $("#comuna").append('<option value="30">Santa Bárbara</option>');
            $("#comuna").append('<option value="31">Tucapel</option>');
            $("#comuna").append('<option value="32">Yumbel</option>');
            $("#comuna").append('<option value="33">Alto Biobío</option>');
        }
        else if (regionSeleccionada === "9") {
            $("#comuna").append('<option value="1">Temuco</option>');
            $("#comuna").append('<option value="2">Carahue</option>');
            $("#comuna").append('<option value="3">Cunco</option>');
            $("#comuna").append('<option value="4">Curarrehue</option>');
            $("#comuna").append('<option value="5">Freire</option>');
            $("#comuna").append('<option value="6">Galvarino</option>');
            $("#comuna").append('<option value="7">Gorbea</option>');
            $("#comuna").append('<option value="8">Lautaro</option>');
            $("#comuna").append('<option value="9">Loncoche</option>');
            $("#comuna").append('<option value="10">Melipeuco</option>');
            $("#comuna").append('<option value="11">Nueva Imperial</option>');
            $("#comuna").append('<option value="12">Padre Las Casas</option>');
            $("#comuna").append('<option value="13">Perquenco</option>');
            $("#comuna").append('<option value="14">Pitrufquén</option>');
            $("#comuna").append('<option value="15">Pucón</option>');
            $("#comuna").append('<option value="16">Saavedra</option>');
            $("#comuna").append('<option value="17">Teodoro Schmidt</option>');
            $("#comuna").append('<option value="18">Toltén</option>');
            $("#comuna").append('<option value="19">Vilcún</option>');
            $("#comuna").append('<option value="20">Villarrica</option>');
            $("#comuna").append('<option value="21">Cholchol</option>');
        }
        else if (regionSeleccionada === "14") {
            $("#comuna").append('<option value="1">Valdivia</option>');
            $("#comuna").append('<option value="2">Corral</option>');
            $("#comuna").append('<option value="3">Lanco</option>');
            $("#comuna").append('<option value="4">Los Lagos</option>');
            $("#comuna").append('<option value="5">Máfil</option>');
            $("#comuna").append('<option value="6">Mariquina</option>');
            $("#comuna").append('<option value="7">Paillaco</option>');
            $("#comuna").append('<option value="8">Panguipulli</option>');
            $("#comuna").append('<option value="9">La Unión</option>');
            $("#comuna").append('<option value="10">Futrono</option>');
            $("#comuna").append('<option value="11">Lago Ranco</option>');
            $("#comuna").append('<option value="12">Río Bueno</option>');
        }
        else if (regionSeleccionada === "10") {
            $("#comuna").append('<option value="1">Puerto Montt</option>');
            $("#comuna").append('<option value="2">Calbuco</option>');
            $("#comuna").append('<option value="3">Cochamó</option>');
            $("#comuna").append('<option value="4">Fresia</option>');
            $("#comuna").append('<option value="5">Frutillar</option>');
            $("#comuna").append('<option value="6">Los Muermos</option>');
            $("#comuna").append('<option value="7">Llanquihue</option>');
            $("#comuna").append('<option value="8">Maullín</option>');
            $("#comuna").append('<option value="9">Puerto Varas</option>');
            $("#comuna").append('<option value="10">Castro</option>');
            $("#comuna").append('<option value="11">Ancud</option>');
            $("#comuna").append('<option value="12">Chonchi</option>');
            $("#comuna").append('<option value="13">Curaco de Vélez</option>');
            $("#comuna").append('<option value="14">Dalcahue</option>');
            $("#comuna").append('<option value="15">Puqueldón</option>');
            $("#comuna").append('<option value="16">Queilén</option>');
            $("#comuna").append('<option value="17">Quellón</option>');
            $("#comuna").append('<option value="18">Quemchi</option>');
            $("#comuna").append('<option value="19">Quinchao</option>');
            $("#comuna").append('<option value="20">Osorno</option>');
            $("#comuna").append('<option value="21">Puerto Octay</option>');
            $("#comuna").append('<option value="22">Purranque</option>');
            $("#comuna").append('<option value="23">Puyehue</option>');
            $("#comuna").append('<option value="24">Río Negro</option>');
            $("#comuna").append('<option value="25">San Juan de la Costa</option>');
            $("#comuna").append('<option value="26">San Pablo</option>');
        }
        else if (regionSeleccionada === "11") {
            $("#comuna").append('<option value="1">Coihaique</option>');
            $("#comuna").append('<option value="2">Lago Verde</option>');
            $("#comuna").append('<option value="3">Aysén</option>');
            $("#comuna").append('<option value="4">Cisnes</option>');
            $("#comuna").append('<option value="5">Guaitecas</option>');
            $("#comuna").append('<option value="6">Chile Chico</option>');
            $("#comuna").append('<option value="7">Río Ibáñez</option>');
        }
        else if (regionSeleccionada === "12") {
            $("#comuna").append('<option value="1">Punta Arenas</option>');
            $("#comuna").append('<option value="2">Laguna Blanca</option>');
            $("#comuna").append('<option value="3">Río Verde</option>');
            $("#comuna").append('<option value="4">San Gregorio</option>');
            $("#comuna").append('<option value="5">Cabo de Hornos (Ex Navarino)</option>');
            $("#comuna").append('<option value="6">Antártica</option>');
            $("#comuna").append('<option value="7">Porvenir</option>');
            $("#comuna").append('<option value="8">Primavera</option>');
            $("#comuna").append('<option value="9">Timaukel</option>');
            $("#comuna").append('<option value="10">Natales</option>');
            $("#comuna").append('<option value="11">Torres del Paine</option>');
        }else if (regionSeleccionada === "15") {
            $("#comuna").append('<option value="1">Arica</option>');
            $("#comuna").append('<option value="2">Camarones</option>');
            $("#comuna").append('<option value="3">Putre</option>');
            $("#comuna").append('<option value="4">General Lagos</option>');
        }
    });
    // Se comienza la validación del formulario usando JQuery Validator
    $("#registro").validate({
      rules: { // las reglas de qué campos son obligatorios llenar: nombre, email, password, etc.
        nombre: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        password: {
          required: true,
        },
        "contrapass": {
          required: true,
          equalTo: "#password", // la contraseña tiene que ser igual a su confirmación
        },        
        rut: {
          required: true,
          rut: true,
          rutdv: true,
        },
        terminos: {
          required: true,
        },
        region:{
          required: true,
        },
        comuna:{
          required:true,
        },
      },
      messages: {
        nombre: {
          required: "El nombre es obligatorio",
        },
        email: {
          required: "El email es obligatorio",
          email: "El email no es válido",
        },
        password: {
          required: "La contraseña es obligatoria",
        },
        rut: {
          required: "El RUT es requerido",
          rut: "Formato: Sin puntos, con guión",
          rutdv: "El dígito verificador no es válido",
        },
        "contrapass": {
          required: "La confirmación de contraseña es requerida",
          equalTo: "Las contraseñas deben coincidir",
        },
        terminos: {
          required: "",
        },
        region: {
          required: "La región es obligatoria",
        },
        comuna: {
          required: "La comuna es obligatoria",
        },
      },
      submitHandler: () => { /* creamos una tabla de valores con los datos del usuario y los mostramos por consola */
        const email = $("#email").val();
        const password = $("#password").val();
        console.table({ email, password });
      },
    });
  });
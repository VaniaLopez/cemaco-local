$(function () {
    var valorSuperDireccion = false;

  $("#superclubFechaNacimiento").datepicker({
    dateFormat: "dd/mm/yy",
    changeMonth: true,
    changeYear: true,
    yearRange: "2000:2021",
    required: true,
    defaultDate: null,
  });

  $("#superclubFechaPapas").datepicker({
    dateFormat: "dd/mm/yy",
    changeMonth: true,
    changeYear: true,
    yearRange: "1930:2010",
  });

  $("input[type=radio][name=direccion]").change(function () {
    let otroDireccionInput = $("#superclubOtraDireccion");
    if (this.value == "Es la misma direcciÃ³n que mi casa") {
        otroDireccionInput.css("display", "none");

    } else if (this.value == "Otra") {      
      otroDireccionInput.css("display", "block");
      valorSuperDireccion = true;
    }
  });

  $("#superclubSubscribe").on("submit", function (e) {
    e.preventDefault();
    var superclubDireccionOtra = ''
    if (valorSuperDireccion) {
        superclubDireccionOtra = $('#superclubOtraDireccion').val();        
    }else {
        superclubDireccionOtra = 'Es la misma direccion'

    }
    console.log(superclubDireccionOtra);
    let superclubNombreNino = $("#superclubNombreNino").val();
    let superclubApellidos = $("#superclubApellidos").val();
    let superclubEmail = $("#superclubEmail").val();
    let superclubConfirmar = $("#superclubConfirmar").val();
    let superclubFechaNacimiento = $("#superclubFechaNacimiento")
      .datepicker({ dateFormat: "dd-mm-yy" })
      .val();
    let radioGenero = document.getElementsByName("genero");
    let radioQuienEres = document.getElementsByName("quieneres");
    let radioPrimeraVez = document.getElementsByName("primeravez");
    let radioGeneroAdultos = document.getElementsByName("generoAdulto");
    let radioDireccion = document.getElementsByName("direccion");
    let superclubGenero = $('input[name="genero"]:checked').val();
    let superclubIntereses = $("#superclubIntereses").val();
    let superClubQuienEres = $('input[name="quieneres"]:checked').val();
    let superClubSolicitud = $('input[name="primeravez"]:checked').val();

    //Datos de encargado
    let superclubParentesco = $("#superclubParentesco").val();
    let superclubNombresPapas = $("#superclubNombresPapas").val();
    let superclubApellidosPapas = $("#superclubApellidosPapas").val();
    let superclubDPI = $("#superclubDPI").val();
    let superclubNoPrivilegio = $("#superclubNoPrivilegio").val();
    let superclubFechaPapas = $("#superclubFechaPapas")
      .datepicker({ dateFormat: "dd-mm-yy" })
      .val();
    let superclubGeneroAdulto = $('input[name="generoAdulto"]:checked').val();
    let superclubCorreoPapas = $("#superclubCorreoPapas").val();
    let superclubConfirmarPapas = $("#superclubConfirmarPapas").val();
    console.log(superclubConfirmarPapas);
    let superclubTelefono = $("#superclubTelefono").val();
    let superclubTelefonoCelular = $("#superclubTelefonoCelular").val();
    let superclubZona = $("#superclubZona").val();
    let superclubDepartamento = $("#superclubDepartamento").val();
    let superclubDireccion = $("#superclubDireccion").val();
    let txt_success = $('#txt_success')
    
    

    let superClubAlerta = $(".alert_super");
    superClubAlerta.css("display", "none");
    let quienEresSuper = $("#quienEresSuper");
    let alertaNombreNino = $("#nombreNino");
    let alertaApellidoNino = $("#apellidoNino");
    let correoNino = $("#correoNino");
    let confirmarCorreoNino = $("#confCorreoNino");
    let alertaGeneroNino = $("#generoNino");
    let alertaIntereses = $("#interesesNino");
    let alertaPrimeraVez = $('#primeraVezSuper');
    let alertaFechaNino = $('#fechaNacimientoNino');

    /* **********Validacion quien eres************** */

    let validatePrimera = false;
    var i = 0;
    while (!validatePrimera && i < radioPrimeraVez.length) {
      if (radioPrimeraVez[i].checked) validatePrimera = true;
      i++;
    } //console.log(validateGenero);

    /* ***************************************** */

    /* **********Validacion quien eres************** */

    let validateQuien = false;
    var i = 0;
    while (!validateQuien && i < radioQuienEres.length) {
      if (radioQuienEres[i].checked) validateQuien = true;
      i++;
    } //console.log(validateGenero);

    /* ***************************************** */

    /* **********Validacion genero************** */

    let validateGenero = false;
    var i = 0;
    while (!validateGenero && i < radioGenero.length) {
      if (radioGenero[i].checked) validateGenero = true;
      i++;
    }
    let validateGeneroAdultos = false;
    var i = 0;
    while (!validateGeneroAdultos && i < radioGeneroAdultos.length) {
      if (radioGeneroAdultos[i].checked) validateGeneroAdultos = true;
      i++;
    }

    /* ***************************************** */

    /* ----------------------------------------------------------------------------------------------------------------------- */

    /* ********** Validacion direccion entrega ************** */

    let validateDireccion = false;
    var i = 0;
    while (!validateDireccion && i < radioDireccion.length) {
      if (radioDireccion[i].checked) validateDireccion = true;
      i++;
    } //console.log(validateGenero);

    /* ******************************************* */

    //Alertas para parentesco
    let alertaparentescoRes = $("#parentescoRes");
    let alertanombreRes = $("#nombreRes");
    let alertaapellidoRes = $("#apellidoRes");
    let alertadpiRes = $("#dpiRes");
    let alertapriviRes = $("#priviRes");
    let alertafechaRes = $("#fechaRes");
    let alertacorreoRes = $("#correoRes");
    let alertaconfCorreoRes = $("#confCorreoRes");
    let alertatelefonoRes = $("#telefonoRes");
    let alertacelularRes = $("#celularRes");
    let alertazonaRes = $("#zonaRes");
    let alertadepartamentoRes = $("#departamentoRes");
    let direccionRes1 = $('#direccionRes');
    let direccionRes2 = $('#otraDireccionRes')
    let alertadireccionRes = $("#direccionRes");
    let alertaGeneroRes = $("#generoRes");


    dataForm = {
      superclubNombreNino: superclubNombreNino,
      superclubApellidos: superclubApellidos,
      superclubEmail: superclubEmail,
      superclubFechaNacimiento: superclubFechaNacimiento,
      superclubGenero: superclubGenero,
      superclubIntereses: superclubIntereses,
      superClubQuienEres: superClubQuienEres,
      superClubSolicitud: superClubSolicitud,

      superclubParentesco: superclubParentesco,
      superclubNombresPapas: superclubNombresPapas,
      superclubApellidosPapas: superclubApellidosPapas,
      superclubDPI: superclubDPI,
      superclubNoPrivilegio: superclubNoPrivilegio,
      superclubFechaPapas: superclubFechaPapas,
      superclubGeneroAdulto: superclubGeneroAdulto,
      superclubCorreoPapas: superclubCorreoPapas,
      superclubTelefono: superclubTelefono,
      superclubTelefonoCelular: superclubTelefonoCelular,
      superclubZona: superclubZona,
      superclubDepartamento: superclubDepartamento,
      superclubDireccion: superclubDireccion,
      superclubDireccionOtra: superclubDireccionOtra,
    };

    if (!validateQuien) {
      console.log("Dime quien eres");
      quienEresSuper.text("Dime quien eres");
      quienEresSuper.css("display", "block");
      $('html, body').animate({
        scrollTop: $("#aQuienEres").offset().top
    }, 1000);
    } else if (!validatePrimera) {
      console.log("Dime si es la primera vez");
      alertaPrimeraVez.text("Dime si cuentas ya con una tarjeta");
      alertaPrimeraVez.css("display", "block");
      $('html, body').animate({
        scrollTop: $("#aPrimeraVez").offset().top
    }, 1000);
    } else if (superclubNombreNino == null || superclubNombreNino.length == 0) {
      console.log("Error, no escribiste el nombre");
      alertaNombreNino.text("Debes de escribir un nombre");
      alertaNombreNino.css("display", "block");
      $('html, body').animate({
        scrollTop: $("#aNombreNino").offset().top
    }, 1000);
    } else if (superclubApellidos == null || superclubApellidos.length == 0) {
      console.log("No escribiste un apaellido");
      alertaApellidoNino.text("Debes de escribir un apellido");
      alertaApellidoNino.css("display", "block");
      $('html, body').animate({
        scrollTop: $("#aApellidosNino").offset().top
    }, 1000);
    } else if (!validateEmail(superclubEmail)) {
      console.log("No escribiste un correo valido");
      correoNino.text("Debes de escribir un correo valido");
      correoNino.css("display", "block");
      retornar("#aCorreoNino")
    } else if (superclubEmail !== superclubConfirmar) {
      console.log("No escribiste un correo igual");
      confirmarCorreoNino.text("Los correos no coinciden");
      confirmarCorreoNino.css("display", "block");
      retornar("#aConfCorreoNino")
    } else if (superclubFechaNacimiento == null || superclubFechaNacimiento.length == 0) {
      alertaFechaNino.text("Debes agregar la fecha de nacimiento del menor");
      alertaFechaNino.css("display", "block");
      retornar("#aFechaNino")
    } /*else if (superclubFechaNacimiento.getDate() == null) {
        console.log("No escribiste unA FECHA");
        alertaFechaNino.text("Debes de escribir un nombre");
        alertaFechaNino.css("display", "block");
        retornar("#aFechaNino")
    }*/ else if (!validateGenero) {
      alertaGeneroNino.text("Debes de elegir un genero");
      alertaGeneroNino.css("display", "block");
      retornar("#aGeneroNino")
    } else if (superclubIntereses == null || superclubIntereses.length == 0) {
      console.log("No escribiste intereses");
      alertaIntereses.text("Debes de escribir tus intereses");
      alertaIntereses.css("display", "block");
      retornar("#aInteresNino")
    }

    //Condiciones para responsable
    else if (superclubParentesco == null || superclubParentesco.length == 0) {
      alertaparentescoRes.text("Debes de agregar un parentesco valido");
      alertaparentescoRes.css("display", "block");
      retornar("#aParentescoRes")
    } else if (superclubNombresPapas == null || superclubNombresPapas.length == 0 ) {
      alertanombreRes.text("Debes agregar el nombre del responsable");
      alertanombreRes.css("display", "block");
      retornar("#aNombreRes");
    } else if (superclubApellidosPapas == null || superclubApellidosPapas.length == 0) {
      alertaapellidoRes.text("Debes agregar los apellidos del responsable");
      alertaapellidoRes.css("display", "block");
      retornar("#aApellidoRes")
    } else if (superclubDPI == null || superclubDPI.length < 13) {
      alertadpiRes.text("Debes agregar un dpi valido");
      alertadpiRes.css("display", "block");
      retornar("#aDpiRes")
    } else if (superclubNoPrivilegio == null || superclubNoPrivilegio.length == 0) {
      alertapriviRes.text("Debes agregar el nÃºmero de tarjeta privilegio del responsable");
      alertapriviRes.css("display", "block");
      retornar("#aPriviRes")
    } else if (superclubFechaPapas == null || superclubFechaPapas.length == 0) {
      alertafechaRes.text("Debes agregar la fecha de nacimiento responsable");
      alertafechaRes.css("display", "block");
      retornar("#aFechaRes")
    } else if (!validateGeneroAdultos) {
      console.log("Elige");
      alertaGeneroRes.text("Debes elegir un genero");
      alertaGeneroRes.css("display", "block");
      retornar("#aGeneroRes");
    } else if (!validateEmail(superclubCorreoPapas)) {
      alertacorreoRes.text("Debes agregar el correo del responsable");
      alertacorreoRes.css("display", "block");
      retornar("#aCorreoRes")
    } 
    else if (superclubCorreoPapas !== superclubConfirmarPapas) {
        console.log("No escribiste un correo igual");
        alertaconfCorreoRes.text("Los correos no coinciden");
        alertaconfCorreoRes.css("display", "block");
        retornar("#aConfCorreoRes")
      } 
      else if (superclubTelefono == null || superclubTelefono.length < 8) {
      alertatelefonoRes.text("Debes agregar el telefono del responsable");
      alertatelefonoRes.css("display", "block");
      retornar("#aTelefonoRes")
    } else if (superclubTelefonoCelular == null || superclubTelefonoCelular.length < 8) {
      alertacelularRes.text("Debes agregar el celular del responsable");
      alertacelularRes.css("display", "block");
      retornar("#aCelularRes")
    } else if (superclubZona == null || superclubZona.length == 0) {
      alertazonaRes.text("Debes agregar la zona del responsable");
      alertazonaRes.css("display", "block");
      retornar("#aZonaRes")
    } else if (superclubDepartamento == null ||superclubDepartamento.length == 0) {
      alertadepartamentoRes.text("Debes agregar el departamento del responsable");
      alertadepartamentoRes.css("display", "block");
      retornar("#aDepartamentoRes");
    }  else if (superclubDireccion == null || superclubDireccion.length == 0) {
      direccionRes1.text("Debes agregar una direccion valida");
      direccionRes1.css("display", "block");
      retornar("#aDireccionRes");
    }else if (!validateDireccion) {
      let otroDireccionInput = $("#superclubOtraDireccion");
      direccionRes2.css("display", "block");
      direccionRes2.text(
        "Debes de seleccionar la direccion de entraga para la tarjeta"
      );
      alertadireccionRes.css("display", "block");
      retornar("#superclubDireccionMisma")
    } else {
           
                    $.ajax({
                        url: "https://61mzi0277k.execute-api.us-east-1.amazonaws.com/prod/enviar_correo",
                        type: "POST",
                        data: JSON.stringify(dataForm),
                        dataType: "text",
                        cache: false,
                        processData: false,
                        error: function (xhr, status, error) {
                            console.log(xhr.responseText);
                        },
                        success: function () {
                          txt_success.css('display', 'block');
                        }
                    });
      limpar();
    }
  });

  //Funcion para validar correo mediante expresiones regulares
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function retornar(id) {
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 1000);
  }

  function limpar() {
    $("#superclubNombreNino").val("");
    $("#superclubApellidos").val("");
    $("#superclubEmail").val("");
    $("#superclubConfirmar").val("");
    $("#superclubConfirmar").val("");

    $("#superclubFechaNacimiento").val();
    $("#superclubIntereses").val();

    //Datos de encargado
    $("#superclubParentesco").val("");
    $("#superclubNombresPapas").val("");
    $("#superclubApellidosPapas").val("");
    $("#superclubDPI").val("");
    $("#superclubNoPrivilegio").val("");
    $("#superclubFechaPapas").val("");
    $('input[name="generoAdulto"]:checked').val("");
    $("#superclubCorreoPapas").val("");
    $("#superclubConfirmarPapas").val("");
    $("#superclubTelefono").val("");
    $("#superclubTelefonoCelular").val("");
    $("#superclubZona").val("");
    $("#superclubDepartamento").val("");
    $("#superclubDireccion").val("");
    $("#superclubDireccionMisma").val("");
    $("#superclubDireccionOtra").val("");
  }
});
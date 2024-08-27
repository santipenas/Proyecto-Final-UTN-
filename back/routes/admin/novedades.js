var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

/*
// LAS LINEAS DE ABAJO LAS TRAIGO PARA CLOUDINARY Y FILEUPLOAD Y API
var util = require('util');
var cloudinary = require('cloudinary').v2;
var uploader = util.promisify(cloudinary.uploader.upload);
*/


/* GET home page. */
router.get('/', async function (req, res, next) {

  var novedades = await novedadesModel.getNovedades();

  res.render('admin/novedades', {
    layout: 'admin/layout',
    persona: req.session.nombre, 
    novedades 
  });
});
 
  

// CONTROLADOR PARA AGREGAR
router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  });
});

// PARA CAPTURAR LOS DATOS Y AGREGAR UNA NOVEDAD A LA BD
router.post('/agregar', async (req, res, next) => {
  try {

    // console.log(req.body); esto para mostrar en la terminal los datos

    if (req.body.nombre != "" && req.body.profesion != "" && req.body.edad != "" && req.body.tipo != "" && req.body.mail != "" && req.body.telefono != "") {    
    await novedadesModel.insertNovedad(req.body);

      res.redirect('/admin/novedades')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error);
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargo la novedad'
    })
  }


  //CONTROLADOR PARA ELIMINAR UNA NOVEDAD
  router.get('/eliminar/:id', async (req, res, next) => {

    var id = req.params.id;
    //console.log(id); console.log(req.params.id); 

    await novedadesModel.deleteNovedadesById(id);
    res.redirect('/admin/novedades');

  });

});


// CONTROLADOR DE MODIFICAR CON LOS DATOS CARGADOS
router.get('/modificar/:id', async (req, res, next) => {

  var id = req.params.id;
  // console.log(req.params.id); ESTO ES SOLO PARA MOSTRAR EN LA CONSOLA
  var novedad = await novedadesModel.getNovedadById(id);
  res.render('admin/modificar', { // modificar.hbs
    layout: 'admin/layout',
    novedad
  });
});



//DENTRO DE MODIFIAR, CONTROLADOR PARA MODIFICAR LA NOVEDAD

router.post('/modificar', async (req, res, next) => {
  try {
    // abajo reemplazo los datos de mi tabla segun mis datos
    var obj = {
      nombre: req.body.nombre,
      profesion: req.body.profesion,
      edad: req.body.edad,
      tipo: req.body.tipo,
      mail: req.body.mail,
      telefono: req.body.telefono


      /*
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo */
    }

    // console.log(obj)
    // console.log(req.body.id)

    await novedadesModel.modificarNovedadById(obj, req.body.id);
    res.redirect('/admin/novedades');

  } catch (error) {
    console.log(error);
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico los datos del Cliente, por favor intente nuevamente'
    })
  }
});


module.exports = router;
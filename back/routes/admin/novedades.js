var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

/* GET home page. */
router.get('/', async function(req, res, next) {

  var novedades = await novedadesModel.getNovedades();

  res.render('admin/novedades', { 
    layout: 'admin/layout',
    persona: req.session.nombre, // CUIDADO SI DBO PONER PERSONA O USUARIO EN ESTA LINEA
    novedades
  });
});


// FORMULARIO PARA AGREGAR

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  });
});

// PARA AGREGAR UNA NOVEDAD
router.post('/agregar', async (req, res, next) => {
  try {

      // console.log(req.body); esto para mostrar en la terminal los datos

    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
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

  
  //PARA ELIMINAR UNA NOVEDAD
  router.get('/eliminar/:id', async (req, res, next) => {

    var id = req.params.id;
    //console.log(id); console.log(req.params.id); 

    await novedadesModel.deleteNovedadesById(id);
    res.redirect('/admin/novedades');

  });

});
  

  // FORMULARIO DE MODIFICAR CON LOS DATOS CARGADOS
  router.get('/modificar/:id', async (req, res, next) => {

    var id = req.params.id;
    // console.log(req.params.id); ESTO ES SOLO PARA MOSTRAR EN LA CONSOLA
    var novedad = await novedadesModel.getNovedadById(id);
    res.render('admin/modificar', { // modificar.hbs
      layout: 'admin/layout',
      novedad
    });
  });



//DENTRO DE MOFICIAR, PARA MODIFICAR LA NOVEDAD

router.post('/modificar', async (req, res, next) => {
    try {

        var obj = {
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo
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
            message: 'No se modifico la novedad'
        })
    }
});

        







module.exports = router;
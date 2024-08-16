var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var fileUpload = require('express-fileupload');
var cors = require('cors');


require('dotenv').config();
var session = require('express-session');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/admin/login');
var adminRouter = require('./routes/admin/novedades');
var apiRouter = require('./routes/api');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//variables sesion
app.use(session({
  secret: 'utn',
  cookie: { maxAge: null },
  resave: false,
  saveUninitialized: true
}));

secured = async (req, res, next) => {
  try {
    console.log(req.session.id_usuario);
    if (req.session.id_usuario) {
      next();
    } else {
      res.redirect('/admin/login');
    }
   } catch (error) {
      console.log(error);
  }
 }  

 /* FILEUPLOAD NO LO NECESITO
 app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './tmp/'
 }));
*/

app.use('/', indexRouter);
app.use('/users', usersRouter);
var pool = require('./models/bd');

/*
// CONSULTA DE SELECT 
pool.query('select * from inmobiliaria').then(function(resultados) {
  console.log(resultados);
});
*/
 
app.use('/admin/login', loginRouter);
app.use('/admin/novedades', secured, adminRouter);
app.use('/api', cors(), apiRouter);

/* 
MAS DE VARIABLES DE SESION, ERA TAREA DE MODILOS ANTERIORES, NO ES NEESARIO PARA EL PROYETO FINAL
app.get('/', function(req, res) {
  var conocido = Boolean(req.session.nombre);

  res.render('index', { 
    title: 'Sesiones en Express.js',
    conocido: conocido,
    nombre: req.session.nombre
  });
  
  app.post('/ingresar', function(req, res) {
    if (req.body.nombre) {
      req.session.nombre = req.body.nombre;
    }

    res.redirect('/');
  });

  app.get('/salir', function(req, res) {
    req.session.destroy();
    res.redirect('/');
  });
  */


//Aca pongo los ejemplos  y distitnas rutas para ir probando. Luego tendre que sacar o modificar seguramente. Esto basado en la intoduccion de Node, segureo despes tenga que cambair esto. Esto fue la tarea de Introducciona  Node
/*
app.get('/prueba', function(req, res,next) {
  res.send('Hola mundo, estoy probando la ruta');
});

app.get('/home', function(req, res, next) {
  res.send('Hola mundo, estoy probando la ruta home');
});

app.get('/nosotros', function(req, res, next) {
  res.send('Hola mundo, estoy probando la ruta nosotros');
});

app.get('/servicios', function(req, res, next) {
  res.send('Hola mundo, estoy probando la ruta servicios');
});

app.get('/galeria', function(req, res, next) {
  res.send('Hola mundo, estoy probando la ruta galeria');
});

app.get('/contacto', function(req, res, next) {
  res.send('Hola mundo, estoy probando la ruta contacto');
});
*/




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

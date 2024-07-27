var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//empeizo a armar la ruta del adimn y login
var loginRouter = require('./routes/admin/login');

//armando variables de sesion, luego vere si debo usarlas en el proyecto final

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//agrego manejador delloginRouter
app.use('/admin/login', loginRouter)


//Aca pongo los ejemplos  y distitnas rutas para ir probando. Luego tendre que sacar o modificar seguramente. Esto basado en la intoduccion de Node, segureo despes tenga que cambair esto.
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

var express = require("express");
var router = express.Router();
var novedadesModel = require("../models/novedadesModel");
// var cloudinary = require('cloudinary').v2;
var nodemailer = require("nodemailer");

router.get("/novedades", async function (req, res, next) {
  var novedades = await novedadesModel.getNovedades();

  res.json(novedades);
});


router.post('/contacto', async (req, res) => {
  const mail = {
    to: 'penassantiago@gmail.com',
    subject: 'Contacto desde la Web',
    html: `${req.body.nombre} se contactó desde la Web para pedir más información a este correo: ${req.body.email} <br> 
    Además, hizo el siguiente comentario: ${req.body.mensaje} <br> 
    Su teléfono de contacto es ${req.body.telefono}`
  };

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transport.sendMail(mail);

  res.status(201).json({
    error: false,
    message: 'Mensaje enviado correctamente',
  });

});

module.exports = router;

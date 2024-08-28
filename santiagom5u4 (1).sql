-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 26, 2024 at 07:29 PM
-- Server version: 5.5.24-log
-- PHP Version: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `santiagom5u4`
--

-- --------------------------------------------------------

--
-- Table structure for table `clientes`
--

CREATE TABLE IF NOT EXISTS `clientes` (
  `id` int(99) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(99) NOT NULL,
  `profesion` varchar(99) NOT NULL,
  `edad` int(99) NOT NULL,
  `tipo` varchar(99) NOT NULL,
  `mail` varchar(99) NOT NULL,
  `telefono` int(99) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=24 ;

--
-- Dumping data for table `clientes`
--

INSERT INTO `clientes` (`id`, `nombre`, `profesion`, `edad`, `tipo`, `mail`, `telefono`) VALUES
(1, 'Juan Pablo Altberges', 'Arquitecto', 34, 'Propietario', 'juanpalt@gmail.com', 45851254),
(2, 'Gabriel Pilar Gonzalez (modificado)', 'Profesor', 32, 'Propietario', 'g_pillai@hotmail.com', 47153225),
(3, 'Ana Daria', 'Abogado', 27, 'Propietario', 'ana@gmail.com', 49719971),
(4, 'Marino Anchor', 'Medico', 26, 'Propietario', 'marianoanchor@gmail.com', 47879865),
(5, 'Alfonso Fernandez', 'Programador', 31, 'Inquilino', 'af@bgmail.com', 41020337),
(9, 'Hernan Rosso (modificado: Hernan Russo)', 'Especialista Multimedia', 33, 'Propietario', 'hernan@gmail.com', 41989878),
(11, 'Pedro M. Hernandez', 'Emprendedor', 32, 'Inquilino', 'phernandez@gmail.com', 45789825),
(12, 'Jimena Cazado Gutierrez', 'Diseñador Web Senior (modificado luego: Diseñador Industrial)', 32, 'Propietario', 'jimenacazado@gmail.com', 41179863),
(22, 'Patricio', 'estudiante', 55, 'Propietario', 'patricio@gmail.com', 43540989);

-- --------------------------------------------------------

--
-- Table structure for table `novedades`
--

CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=28 ;

--
-- Dumping data for table `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, '(modificado desde admin) Blanqueo de dólares en efectivo: los bancos aceptarán billetes rotos, manchados y “cara chica”', 'El Banco Central asumirá el costo de enviar los billetes dañados o viejos a EEUU. Las entidades financieras ya están obligadas a recibir dólares de series anteriores pero como eso no siempre ocurre, el BCRA habilitó un nuevo canal. Qué billetes no serán aceptados', ' Para blanquear dinero en efectivo, los bancos deberán aceptar del público billetes manchados, escritos o dañados por cualquier forma. El costo de enviarlos a la Reserva Federal de Estados Unidos para recuperar su valor será asumido por el BCRA y no por las entidades financieras, como una forma de incentivar el blanqueo de los “dólares guardados en el colchón” que millones de argentinos atesoran sin declarar. Para ello, el BCRA emitió una norma con una serie de detalles sobre cómo deben acondicionarse esos billetes rotos para ser depositados.Al mismo tiempo, el Central busca que los dólares de series anteriores, conocidos como “cara chica”, también sean depositados en los bancos para ser blanqueados y, posteriormente, girados a Estados Unidos, aún cuando se encuentren en buen estado. La norma dictada hoy por el BCRA no se refiere a ellos en forma específica, ya que los bancos están obligados a recibir depósitos de cualquier billete de dólar. Pero en los hechos, el Central sabe que muchos bancos los evitan o directamente los rechazan, aún cuando la Reserva Federal ha informado muchas veces que los billetes de dólar nunca pierden su valor de circulación, no importa lo viejos que sean.\r\n\r\nDe ese modo, el Banco Central quiere “limpiar” la cuantiosa tenencia de dólares en efectivo que tienen los argentinos en su poder. Quiere retirar tanto los billetes deteriorados como aquellos de series viejas, como los “cara chica”. Y le evitará a los bancos el costo de enviarlos a Estados Unidos para que la Reserva Federal acredite su importe en sus cuentas. '),
(2, 'La UBA cuestionó los datos del Gobierno sobre los salarios docentes universitarios: “Es falso”', 'El Ministerio de Capital Humano dijo que hubo incrementos del 71%. “Están reconociendo que la inflación acumulada fue casi el doble que la actualización de los sueldos”, respondió Emiliano Yacobitti, vicerrector de la entidad educativa', 'El Ministerio de Capital Humano emitió un comunicado este jueves en el que informó que los docentes universitarios incrementaron sus ingresos un 71%, mientras que a los empleados del Estado un 58,5% y resaltó que “todos los sectores de la sociedad están poniendo el hombro”. Esas declaraciones llegaron en medio de un fuerte reclamo paritario y luego de la multitudinaria Marcha Universitaria Federal que se realizó en abril, por lo que el vicerrector de la UBA, Emiliano Yacobitti, salió a responderle al Gobierno y denunció que los datos publicados son falsos.\r\nLa cartera que conduce Sandra Pettovello resaltó: “Todos los sectores de la sociedad están poniendo el hombro. Parte del ajuste tiene que ver, también, con la fiscalización y la transparencia de los gastos superfluos en las universidades. Sin embargo, aún hay resistencia para que sean identificadas muchas de esas erogaciones excesivas e injustificadas como los cursos con inexistencia de alumnos y profesores. La realidad es que de diciembre a julio, el aumento del sueldo del personal de las universidades nacionales es superior a la pauta establecida para los salarios del Estado nacional, en igual lapso”.'),
(3, 'MODIFICADO 2 veces para probar Blanqueo de dólares en efectivo: los bancos aceptarán billetes rotos, manchados y “cara chica”', 'El Banco Central asumirá el costo de enviar los billetes dañados o viejos a EEUU. Las entidades financieras ya están obligadas a recibir dólares de series anteriores pero como eso no siempre ocurre, el BCRA habilitó un nuevo canal. Qué billetes no serán aceptados', '  Para blanquear dinero en efectivo, los bancos deberán aceptar del público billetes manchados, escritos o dañados por cualquier forma. El costo de enviarlos a la Reserva Federal de Estados Unidos para recuperar su valor será asumido por el BCRA y no por las entidades financieras, como una forma de incentivar el blanqueo de los “dólares guardados en el colchón” que millones de argentinos atesoran sin declarar. Para ello, el BCRA emitió una norma con una serie de detalles sobre cómo deben acondicionarse esos billetes rotos para ser depositados.Al mismo tiempo, el Central busca que los dólares de series anteriores, conocidos como “cara chica”, también sean depositados en los bancos para ser blanqueados y, posteriormente, girados a Estados Unidos, aún cuando se encuentren en buen estado. La norma dictada hoy por el BCRA no se refiere a ellos en forma específica, ya que los bancos están obligados a recibir depósitos de cualquier billete de dólar. Pero en los hechos, el Central sabe que muchos bancos los evitan o directamente los rechazan, aún cuando la Reserva Federal ha informado muchas veces que los billetes de dólar nunca pierden su valor de circulación, no importa lo viejos que sean.\r\n\r\nDe ese modo, el Banco Central quiere “limpiar” la cuantiosa tenencia de dólares en efectivo que tienen los argentinos en su poder. Quiere retirar tanto los billetes deteriorados como aquellos de series viejas, como los “cara chica”. Y le evitará a los bancos el costo de enviarlos a Estados Unidos para que la Reserva Federal acredite su importe en sus cuentas.  '),
(27, 'nueva', 'nueva', 'nn');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'santiago', 'ec6a6536ca304edf844d1d248a4f08dc'),
(2, 'laura', '81dc9bdb52d04dc20036dbd8313ed055');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

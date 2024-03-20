-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-03-2024 a las 18:49:29
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `neurotfg`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `funciones_cognitivas`
--

CREATE TABLE `funciones_cognitivas` (
  `categoria_id` int(11) NOT NULL,
  `categoria_nombre` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `funciones_cognitivas`
--

INSERT INTO `funciones_cognitivas` (`categoria_id`, `categoria_nombre`) VALUES
(1, 'Atención selectiva'),
(2, 'Atención sostenida'),
(3, 'atención alternante'),
(4, 'Atención dividida');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tests_cogni`
--

CREATE TABLE `tests_cogni` (
  `test_id` int(11) NOT NULL,
  `test_nombre` varchar(50) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `edad_desde` int(11) NOT NULL,
  `nivel_educativo` varchar(50) DEFAULT NULL,
  `regiones_relac` varchar(255) DEFAULT NULL,
  `tiempo_requerido` int(11) DEFAULT NULL,
  `edad_hasta` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `tests_cogni`
--

INSERT INTO `tests_cogni` (`test_id`, `test_nombre`, `categoria_id`, `descripcion`, `edad_desde`, `nivel_educativo`, `regiones_relac`, `tiempo_requerido`, `edad_hasta`) VALUES
(1, 'Test D2', 1, 'Tarea de cancelación de elementos visuales. Evalúa capacidad de concentración mediante velocidad y precisión.', 6, '1', '', 8, 80);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `funciones_cognitivas`
--
ALTER TABLE `funciones_cognitivas`
  ADD PRIMARY KEY (`categoria_id`);

--
-- Indices de la tabla `tests_cogni`
--
ALTER TABLE `tests_cogni`
  ADD PRIMARY KEY (`test_id`),
  ADD KEY `FK_CategoriaTest` (`categoria_id`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tests_cogni`
--
ALTER TABLE `tests_cogni`
  ADD CONSTRAINT `FK_CategoriaTest` FOREIGN KEY (`categoria_id`) REFERENCES `funciones_cognitivas` (`categoria_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

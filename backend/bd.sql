-- Creación de la base de datos bd con UTF-8
CREATE DATABASE bd
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'es_ES.UTF-8'
    LC_CTYPE = 'es_ES.UTF-8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
-- Creación de la tabla Region
CREATE TABLE Region (
    idRegion SERIAL PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL
);
-- Creación de la tabla Ciudad
CREATE TABLE Ciudad (
    idCiudad SERIAL PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    idRegion INT NOT NULL,
    FOREIGN KEY (idRegion) REFERENCES Region(idRegion) ON DELETE CASCADE
);
-- Creación de la tabla Usuario
CREATE TABLE Usuario (
    idUsuario SERIAL PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    Sexo SMALLINT NOT NULL CHECK (Sexo IN (0, 1)),
    Altura FLOAT NOT NULL,
    Peso FLOAT NOT NULL,
    FechaNac DATE NOT NULL,
    Objetivo SMALLINT NOT NULL CHECK (Objetivo BETWEEN 1 AND 3),
    ActividadFisica SMALLINT NOT NULL CHECK (ActividadFisica BETWEEN 1 AND 3),
    Pass VARCHAR(255) NOT NULL,
    idCiudad INT NOT NULL,
    Activo SMALLINT NOT NULL CHECK (Activo IN (0, 1)),
    FOREIGN KEY (idCiudad) REFERENCES Ciudad(idCiudad) ON DELETE CASCADE
);
-- Creación de la tabla Comida
CREATE TABLE Comida (
    idComida SERIAL PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    Categoria VARCHAR(20) NOT NULL,
    Calorias FLOAT NOT NULL,
    Proteinas FLOAT NOT NULL,
    Grasas FLOAT NOT NULL,
    Carbohidratos FLOAT NOT NULL
);
-- Creación de la tabla Menus
CREATE TABLE Menus (
    idMenu SERIAL PRIMARY KEY,
    idUsuario INT NOT NULL,
    idComida INT NOT NULL,
    cantidad INT NOT NULL,
    Fecha DATE NOT NULL DEFAULT CURRENT_DATE,
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario) ON DELETE CASCADE,
    FOREIGN KEY (idComida) REFERENCES Comida(idComida) ON DELETE CASCADE
);
CREATE DATABASE IF NOT EXISTS bd
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_spanish_ci;
USE bd;

CREATE TABLE Region (
    idRegion INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL
);
CREATE TABLE Ciudad (
    idCiudad INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    idRegion INT NOT NULL,
    FOREIGN KEY (idRegion) REFERENCES Region(idRegion) ON DELETE CASCADE
);
CREATE TABLE Usuario (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    Sexo TINYINT NOT NULL CHECK (Sexo IN (0, 1)),
    Altura FLOAT NOT NULL,
    Peso FLOAT NOT NULL,
    FechaNac DATE NOT NULL,
    Objetivo TINYINT NOT NULL CHECK (Objetivo BETWEEN 1 AND 3),
    ActividadFisica TINYINT NOT NULL CHECK (ActividadFisica BETWEEN 1 AND 3),
    Pass VARCHAR(255) NOT NULL,
    idCiudad INT NOT NULL,
    Activo TINYINT NOT NULL CHECK (Activo IN (0, 1)),
    FOREIGN KEY (idCiudad) REFERENCES Ciudad(idCiudad) ON DELETE CASCADE
);
-- Inserción de datos en Region y Ciudad
INSERT INTO Region (Nombre) VALUES
    ('Región 1'), ('Región 2'), ('Región 3');

INSERT INTO Ciudad (Nombre, idRegion) VALUES
    ('Ciudad 1', 1), ('Ciudad 2', 2), ('Ciudad 3', 3);

-- Inserción de 3 usuarios
INSERT INTO Usuario (Nombre, Sexo, Altura, Peso, FechaNac, Objetivo, ActividadFisica, Pass, idCiudad, Activo)
VALUES
    ('Juan Pérez', 1, 1.75, 70.5, '1990-01-15', 1, 2, 'password123', 1, 1),
    ('Ana García', 0, 1.68, 60.0, '1985-05-20', 2, 1, 'password456', 2, 1),
    ('Luis Martínez', 1, 1.80, 80.0, '1992-03-10', 3, 3, 'password789', 3, 1);
CREATE TABLE Comida (
    idComida INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    Categoria VARCHAR(20) NOT NULL,
    Calorias FLOAT NOT NULL,
    Proteinas FLOAT NOT NULL,
    Grasas FLOAT NOT NULL,
    Carbohidratos FLOAT NOT NULL
);
CREATE TABLE Menus (
    idMenu INT AUTO_INCREMENT PRIMARY KEY,
    idUsuario INT NOT NULL,
    idComida INT NOT NULL,
    cantidad INT NOT NULL,
    Fecha DATE NOT NULL DEFAULT (CURRENT_DATE()),
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario) ON DELETE CASCADE,
    FOREIGN KEY (idComida) REFERENCES Comida(idComida) ON DELETE CASCADE
);

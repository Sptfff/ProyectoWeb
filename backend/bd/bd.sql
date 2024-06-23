CREATE DATABASE IF NOT EXISTS bd
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_spanish_ci;
USE bd;

-- Creacion de tabla usuarios
CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    Rut varchar(15) not null,
    Correo varchar(50) not null,
    nombreCiudad varchar(50),
    nombreRegion varchar(50),
    Pass VARCHAR(255) NOT NULL,
    Sexo TINYINT NOT NULL CHECK (Sexo IN (0, 1)),
    Peso FLOAT NOT NULL,
    Altura FLOAT NOT NULL,
    FechaNac DATE NOT NULL,
    Objetivo TINYINT NOT NULL CHECK (Objetivo BETWEEN 1 AND 3),
    ActividadFisica TINYINT NOT NULL CHECK (ActividadFisica BETWEEN 1 AND 3),
    Activo TINYINT NOT NULL CHECK (Activo IN (0, 1)),
    esAdmin TINYINT NOT NULL CHECK (esAdmin IN (0, 1))
);

CREATE TABLE Comida (
    id INT AUTO_INCREMENT PRIMARY KEY,
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
    FOREIGN KEY (idUsuario) REFERENCES Usuario(id) ON DELETE CASCADE,
    FOREIGN KEY (idComida) REFERENCES Comida(id) ON DELETE CASCADE
);

-- Inserción de 3 usuarios
INSERT INTO Usuario (Nombre, Rut, Correo, nombreCiudad, nombreRegion, 
					 Pass, Sexo, Peso, Altura, FechaNac, Objetivo, ActividadFisica,
                     Activo, esAdmin)
VALUES
    ('Juan Pérez','21175006-5', 'juan@ex.com', 'Santiago','Metro', '123',
     1, 90, 152, '1999-01-02', 3, 1, 1, 1),
    ('Maria Luisa','123456789-0', 'maria@exe.com', 'Maipu','Metro', '321',
     0, 50, 182, '2005-01-30', 1, 3, 1, 0),
    ('Luis Martínez','12312952-0', 'louis@exe.com', 'Valpo','Valpo', '098',
     1, 100, 196, '1980-11-30', 2, 1, 0, 0);
     
-- Inserción de 10 comidas
INSERT INTO Comida (Nombre, Categoria, Calorias, Proteinas, Grasas, Carbohidratos) VALUES
('Manzana', 'Fruta', 52, 0.3, 0.2, 14),
('Pollo asado', 'Carne', 239, 27, 14, 0),
('Arroz blanco', 'Cereal', 130, 2.4, 0.3, 28),
('Brócoli', 'Vegetal', 34, 2.8, 0.4, 7),
('Salmón', 'Pescado', 208, 20, 13, 0),
('Yogur', 'Lácteo', 59, 10, 0.4, 3.6),
('Pan integral', 'Cereal', 247, 8, 4.2, 43),
('Aguacate', 'Fruta', 160, 2, 15, 9),
('Huevos', 'Proteína', 155, 13, 11, 1.1),
('Zanahoria', 'Vegetal', 41, 0.9, 0.2, 10);
DELIMITER //

CREATE PROCEDURE usuarioAddOrEdit (
    IN _id INT,
    IN name VARCHAR(50),
    IN _rut VARCHAR(15),
    IN email VARCHAR(50),
    IN city VARCHAR(50),
    IN region VARCHAR(50),
    IN contra VARCHAR(255),
    IN sex TINYINT,
    IN weight FLOAT,
    IN height FLOAT,
    IN birth DATE,
    IN _objetivo TINYINT,
    IN nivel TINYINT,
    IN _activo TINYINT,
    IN _esAdmin TINYINT
)
BEGIN
    IF _id = 0 THEN
        INSERT INTO Usuario (
            Nombre, Rut, Correo, nombreCiudad, nombreRegion, 
            Pass, Sexo, Peso, Altura, FechaNac, Objetivo, ActividadFisica, 
            Activo, esAdmin
        )
        VALUES (
            name, _rut, email, city, region, contra, sex, weight, height, birth, 
            _objetivo, nivel, _activo, _esAdmin
        );
        set _id = last_insert_id();
    ELSE 
        UPDATE Usuario 
        SET
            Sexo = sex,
            Peso = weight,
            Altura = height,
            Objetivo = _objetivo,
            ActividadFisica = nivel,
            FechaNac = birth
        WHERE id = _id;
    END IF;
    SELECT _id AS id;
END //
usuarioAddOrEdit
DELIMITER ;
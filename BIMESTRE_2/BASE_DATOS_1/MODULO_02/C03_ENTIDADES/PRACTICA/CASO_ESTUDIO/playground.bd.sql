CREATE DATABASE playground;
USE playground;

-- ============================================
-- TABLA : categoria
-- ============================================
CREATE TABLE categoria (
	id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(50) NOT NULL
);

-- =============================================
-- TABLA : carrera
-- =============================================
CREATE TABLE carrera (
	id_carrera INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    fecha_inicio DATE,
    fecha_fin DATE
);


-- =============================================
-- TABLA : usuario 
-- =============================================
CREATE TABLE usuario (
	id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    id_categoria INT NOT NULL,
    id_carrera INT NOT NULL,
    CONSTRAINT fk_usuario_categoria
		FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria),
	CONSTRAINT fk_usuario_carrera
		FOREIGN KEY (id_carrera) REFERENCES carrera(id_carrera)
);


-- ============================================
-- TABLA : materia
-- ============================================

CREATE TABLE materia (
	id_materia INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    descripcion TEXT,
    imagen VARCHAR(150) NOT NULL,
    fecha_inicio DATE,
    fecha_fin DATE,
    cupo_max INT,
    id_carrera INT NOT NULL,
    CONSTRAINT fk_id_carrera
		FOREIGN KEY (id_carrera) REFERENCES carrera(id_carrera)
);

-- ==========================================
-- TABLA : modulo
-- ==========================================
CREATE TABLE modulo (
	id_modulo INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    descripcion TEXT,
    fecha_inicio DATE,
    id_materia INT NOT NULL,
    CONSTRAINT kf_modulo_materia
		FOREIGN KEY (id_materia) REFERENCES materia(id_materia)
);

-- =========================================
-- TABLA : clase
-- =========================================

CREATE TABLE clase (
	id_clase INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    descripcion TEXT,
    fecha_inicio DATE,
    visible BOOLEAN NOT NULL,
    tipo VARCHAR(20) NOT NULL,
    id_modulo INT NOT NULL,
    CONSTRAINT kf_clase_modulo
		FOREIGN KEY (id_modulo) REFERENCES modulo(id_modulo)
);


-- ========================================
-- TABLA : bloque
-- ========================================
CREATE TABLE bloque (
	id_bloque INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    visible BOOLEAN NOT NULL DEFAULT TRUE,
    tipo VARCHAR(20) NOT NULL,
    id_clase INT NOT NULL,
    CONSTRAINT fk_bloque_clase
        FOREIGN KEY (id_clase) REFERENCES clase(id_clase)
);
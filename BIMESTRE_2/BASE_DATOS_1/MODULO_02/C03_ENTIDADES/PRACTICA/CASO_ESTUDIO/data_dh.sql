INSERT INTO categoria (descripcion)
VALUES ('Estudiante'), ('Docente'), ('Editor'), ('Administrador');

INSERT INTO carrera (nombre, fecha_inicio, fecha_fin)
VALUES ('Certified Tech Developer', '2026-03-01', '2026-12-15');

INSERT INTO usuario (nombre, apellido, email, password, id_categoria, id_carrera)
VALUES ('Alexander', 'Herrera', 'alexander@email.com', '123456', 1, 1);

INSERT INTO materia (titulo, descripcion, imagen, fecha_inicio, fecha_fin, cupo_max, id_carrera)
VALUES ('Base de Datos I', 'Introducción al modelado de datos', 'bd1.png', '2026-03-10', '2026-07-10', 40, 1);

INSERT INTO modulo (titulo, descripcion, fecha_inicio, id_materia)
VALUES ('Modelo Entidad Relación', 'Conceptos básicos de entidades y relaciones', '2026-03-12', 1);

INSERT INTO clase (titulo, descripcion, fecha_inicio, visible, tipo, id_modulo)
VALUES ('Clase 1 - Entidades', 'Introducción a entidades', '2026-03-13', TRUE, 'virtual', 1);

INSERT INTO bloque (titulo, visible, tipo, id_clase)
VALUES ('Video introductorio', TRUE, 'video', 1);
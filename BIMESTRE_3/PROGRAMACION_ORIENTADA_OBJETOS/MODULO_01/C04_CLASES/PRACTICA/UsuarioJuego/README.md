# 🎮 UsuarioJuego – Mini Proyecto Java con Spring Boot + Gradle

[![Build](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square)]()
[![Coverage](https://img.shields.io/badge/coverage-100%25-success?style=flat-square)]()
[![Java](https://img.shields.io/badge/Java-17-blue?style=flat-square)]()
[![Gradle](https://img.shields.io/badge/Gradle-8.7-green?style=flat-square)]()

> Proyecto simple en Java con Spring Boot y Gradle que modela un sistema de usuario para un juego, incluyendo pruebas unitarias con JUnit 5 y cobertura de código con JaCoCo.

---

## 🧠 Objetivo

Modelar un sistema de usuario en un videojuego, que permita:

- 📛 Registrar nombre y clave del jugador
- 🧮 Incrementar su puntaje
- 🆙 Subir de nivel
- 🎁 Recibir puntos de bonificación

---

## 📦 Estructura del Proyecto

```
usuariojuego/
├── build.gradle
├── settings.gradle
├── README.md
├── src/
│   ├── main/java/com/ejemplo/usuariojuego/
│   │   ├── UsuarioJuego.java
│   │   └── Main.java
│   └── test/java/com/ejemplo/usuariojuego/
│       └── UsuarioJuegoTest.java
```

---

## ⚙️ Tecnologías Utilizadas

| Herramienta      | Versión |
|------------------|---------|
| Java             | 17+     |
| Spring Boot      | 3.2.x   |
| Gradle           | 8.x     |
| JUnit 5          | ✅      |
| Mockito          | ✅      |
| JaCoCo           | ✅      |

---

## 🧪 Pruebas Unitarias

Las pruebas están escritas con **JUnit 5** y validan todos los métodos públicos de la clase `UsuarioJuego`.

```java
@Test
void testBonus() {
    usuario.bonus(10);
    assertEquals(10.0, usuario.getPuntaje());
}
```

> Puedes ejecutar las pruebas con:
```bash
./gradlew test
```

---

## 📈 Cobertura de Código (JaCoCo)

Ejecuta:
```bash
./gradlew jacocoTestReport
```

Luego abre:

```
build/reports/jacoco/test/html/index.html
```

### ✅ Resultado esperado:
![Coverage Report](https://i.imgur.com/q1ZNdZp.png)

> 🎯 Clase `UsuarioJuego`: 100% de cobertura de líneas y métodos  
> 🚫 Clase `Main` excluida del análisis para no afectar la métrica.

---

## 🚀 Cómo Ejecutar

Puedes ejecutar `Main` para ver cómo funciona la clase `UsuarioJuego` en consola:

```bash
./gradlew bootRun
```

O directamente desde tu IDE: clic derecho en `Main` → `Run`.

---

## 📌 Consideraciones

- ✅ Buen ejemplo para aprender testing, cobertura, Gradle y principios básicos OOP.
- ❌ No incluye persistencia ni interfaz web (es un backend de consola).
- 🔒 Los setters están restringidos para mantener integridad en `puntaje` y `nivel`.

---

## 💡 Próximos pasos (ideas)

- Exponer `UsuarioJuego` como una API REST con Spring Web 🕸️  
- Persistir usuarios con H2 o PostgreSQL 💾  
- Crear una interfaz gráfica con JavaFX o React 🎨

---

## 👨‍💻 Autor

**Miguel Alexander Herrera Cooper**  
🧠 Bachiller en Ciencia de la Computación  
🚀 Apasionado por la tecnología, IA y desarrollo backend  
📍 Perú

---

## 📃 Licencia

Este proyecto está bajo la licencia MIT. ¡Úsalo, modifícalo y compártelo!

---

## 🤝 Contribuciones

¿Tienes ideas para mejorar este proyecto?  
¡Pull requests y sugerencias son bienvenidas! ✨
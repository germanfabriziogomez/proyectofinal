# Proyecto Final - Recetas Compartidas 🍽️

Este proyecto es una aplicación web donde los usuarios pueden compartir sus recetas con la comunidad. Los usuarios pueden crear nuevas recetas ingresando información detallada sobre el plato, como el nombre del plato, los ingredientes y una imagen. Las recetas publicadas se muestran en una galería donde todos los usuarios pueden ver las contribuciones.

### **Link al Deploy:**
🌐 [Haz click aquí para ver el proyecto en vivo](https://germanfabriziogomez.github.io/proyectofinal/)

---

## **Características del Proyecto: ¿ Cómo funciona ?**

- **Formulario de Publicación de Recetas 📝:**
  - Los usuarios pueden acceder a un formulario de publicación de recetas haciendo clic en el botón **"Crear Receta"**.
  - El formulario solicita:
    - Nombre del usuario.
    - Nombre del plato.
    - Descripción de los ingredientes.
    - Una foto del plato (pueden subir una imagen desde su dispositivo).
  - Todos los campos son **requeridos** (usando el atributo `required` en los inputs), lo que garantiza que los usuarios no dejen campos vacíos.
  - Si todos los campos están completos y el usuario presiona **"Guardar y Publicar"**, la receta se publica en la galería.

- **Validación de Formulario ✅:**
  - Si un usuario intenta enviar el formulario sin completar todos los campos, el formulario no se enviará.
  - La validación asegura que todos los datos necesarios estén presentes antes de que la receta sea publicada.

- **Galería de Recetas 🖼️:**
  - Las recetas publicadas por los usuarios se muestran en una galería dinámica.
  - Cada receta se presenta con el nombre del plato, una breve descripción de los ingredientes y el nombre del usuario que la publicó.
  - Las recetas son mostradas de manera responsiva, adaptándose al tamaño de la pantalla para una mejor experiencia en dispositivos móviles, tabletas y escritorios.

- **Diseño Responsivo 📱💻:**
  - El diseño de la página está realizado con **Tailwind CSS**, lo que asegura que el sitio sea completamente **responsivo**.
  - Las recetas en la galería se reorganizan automáticamente según el tamaño de la pantalla (utilizando clases como `grid-cols-1`, `sm:grid-cols-2`, `lg:grid-cols-4`).

- **Manejo del Estado con React ⚛️:**
  - El proyecto está desarrollado utilizando **React**, aprovechando el hook `useState` para manejar el estado del formulario y las recetas publicadas.
  - Los datos del formulario, como el nombre del usuario, nombre del plato, descripción y la imagen, se gestionan a través del estado del componente.
  - Los usuarios pueden agregar nuevas recetas, que se almacenan y se muestran dinámicamente en la galería.

---

## **Tecnologías Utilizadas 🛠️:**

- **React**: Para crear la interfaz de usuario interactiva y manejar el estado de los formularios y recetas.
- **Tailwind CSS**: Para el diseño responsivo y estilizado rápido de la página.
- **HTML5 y CSS3**: Para estructurar y diseñar la página.
- **JavaScript (ES6+)**: Para la lógica detrás de la aplicación, como la gestión de eventos y validación del formulario.

---

## **Instrucciones para Ejecutar el Proyecto 🔧:**

1. **Clonar el repositorio:**

   git clone https://github.com/tu-usuario/proyectofinal.git

2. **Acceder a la carpeta del proyecto haciendo "cd app"
3. Ejecutar el proyecto: Pone a correr el proyecto con el comando "npm run dev" 

# Social Network React App

## Descripción
Esta aplicación es una prueba técnica desarrollada con React que permite a los usuarios autenticarse utilizando un autenticador externo (Google), ver publicaciones, y mostrar detalles del usuario y comentarios en modales. La aplicación consume la API de DummyAPI.io.

## Aclaraciones sobre la prueba técnica

Durante el desarrollo de este proyecto, se encontraron algunas discrepancias entre los requisitos de la prueba y las herramientas proporcionadas:

1. **API GraphQL no disponible:** 
   La API proporcionada (https://dummyapi.io/) no ofrece una interfaz GraphQL. A pesar de que el uso de queries y mutations de GraphQL se menciona como algo que será valorado en la prueba, no fue posible implementar esta funcionalidad debido a las limitaciones de la API.

2. **Problemas de acceso a la API:**
   Al momento de realizar esta prueba, la página web de la API presentaba problemas que impedían el inicio de sesión normal para obtener una APP-ID (clave de API). Debido a esto, fue necesario obtener la clave de API por medios alternativos para poder completar el proyecto.

Estas circunstancias llevaron a algunas adaptaciones en la implementación del proyecto, siempre intentando mantener el espíritu de la prueba y demostrar las habilidades requeridas de la mejor manera posible dadas las herramientas disponibles.

## Requisitos
- Node.js (versión 14 o superior)
- npm (versión 6 o superior)
- Git

## Instalación
1. Clona el repositorio:
    ```bash
    git clone origin https://github.com/LFelipeAlvarez/tita-challenge.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd social-network-app
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```

## Uso
1. Configura las variables de entorno necesarias (por ejemplo, las credenciales de autenticación de Google).
2. Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```
3. Abre tu navegador y navega a `http://localhost:3000`

## Características
- **Autenticación de Usuarios**: Inicio de sesión utilizando Google.
- **Visualización de Posts**: Ver posts en la página principal con la siguiente información:
  - Foto y nombre del usuario que hizo el post.
  - Imagen y texto del post.
  - Tags del post.
  - Cantidad de likes y comentarios.
- **Modales**:
  - Modal con todos los comentarios del post.
  - Modal con toda la información del usuario que hizo el post.
- **Filtrado de Posts**: Filtrar posts por tag.
- **Información del Usuario Autenticado**: Mostrar la información del usuario autenticado en el header.

## Estructura del Proyecto
```
src/
│
├── components/
│   ├── header/
│   │   ├── Header.tsx
│   │   ├── Header.css
│   │
│   ├── post/
│   │   ├── Post.tsx
│   │   ├── Post.css
│   │
│   ├── posts/
│   │   ├── Posts.tsx
│   │   ├── Posts.css
│   │
│   ├── tag/
│   │   ├── Tag.tsx
│   │   ├── Tag.css
│
├── hooks/
│   ├── usePosts.ts
│
├── redux/
│   ├── postsSlice.ts
│
├── services/
│   ├── api.ts
│
├── App.css
├── App.tsx
├── config.ts
├── consts.ts
├── index.css
├── main.tsx
├── types.d.ts
```

## Consideraciones Técnicas
- Utilización de **Redux Toolkit** para la gestión del estado global.
- Implementación de **hooks personalizados** para la lógica y manejo de datos.
- Uso de **Atomic Design** para la organización de componentes.

## Despliegue
La aplicación está desplegada en Netlify. Puedes acceder a ella [aquí](https://tita-code-challenge.netlify.app/).

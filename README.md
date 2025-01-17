
# Backend Aplicacion UDD

## Resumen del Proyecto

Proyecto desplegado en Render (https://proyecto-6-udd.onrender.com).

Este proyecto es una aplicación Backend construida con Node.js y Express que brinda:

### 1. Autenticación de Usuarios
- **Registro de nuevos usuarios**: `/api/user/register`
- **Inicio de sesión**: `/api/user/login` y generación de un token JWT para mantener la sesión.
- **Verificación del token**: `/api/user/verifytoken`
- **Actualización de datos del usuario**: `/api/user/update`

### 2. CRUD de Productos
- **Crear**: `/api/product/create`
- **Leer todos**: `/api/product/readall`
- **Leer uno**: `/api/product/readone/:id`
- **Actualizar**: `/api/product/update/:id`
- **Eliminar**: `/api/product/delete/:id`

### 3. Tecnologías principales
- **Node.js + Express**: Para la configuración del servidor y creación de endpoints.
- **Mongoose**: Para la conexión con MongoDB Atlas y el mapeo de datos a través de modelos.
- **JWT (jsonwebtoken)**: Para la autenticación y autorización de usuarios.
- **bcrypt**: Para el hashing seguro de contraseñas.
- **dotenv**: Para la gestión de variables de entorno.

### 4. Estructura
- `models/`: Contiene los esquemas User y Product.
- `controllers/`: Lógica para cada operación (registro, login, CRUD de productos, etc.).
- `routes/`: Define los endpoints y vincula los controladores.
- `server.js`: Punto de entrada principal para configurar la app (Express, CORS, conexión a la base de datos).

### 5. Uso
- Se puede consumir con herramientas como Postman o Insomnia, enviando requests a los endpoints descritos.
- Ideal para proyectos que requieran un backend con gestión de usuarios y un CRUD básico de cualquier entidad (en este caso, Productos).

## Cómo empezar
1. Clona el repositorio:
   ```
   git clone https://github.com/Davidbustosr/Proyecto-6-UDD.git
   ```
2. Instala las dependencias:
   ```
   npm install
   ```
3. Configura las variables de entorno en un archivo `.env`:
   ```
   MONGO_URI=tu_uri_de_mongodb
   JWT_SECRET=tu_secreto_jwt
   ```
4. Inicia el servidor:
   ```
   npm start
   ```
5. Accede a los endpoints mediante herramientas como Postman.

## Licencia
Este proyecto se distribuye bajo la licencia MIT.

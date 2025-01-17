
# 🛠️ Backend Aplicacion con Node.js and Express

## 📖 Resumen del Proyecto

Este proyecto es una aplicación Backend construida con **Node.js** y **Express**, que ofrece:

### 🔒 Autenticación de Usuarios
- **Registro de nuevos usuarios**: `/api/user/register`
- **Inicio de sesión**: `/api/user/login` con generación de un token JWT.
- **Verificación del token**: `/api/user/verifytoken`
- **Actualización de datos del usuario**: `/api/user/update`

### 📦 CRUD de Productos
- **Crear un producto**: `/api/product/create`
- **Leer todos los productos**: `/api/product/readall`
- **Leer un producto por ID**: `/api/product/readone/:id`
- **Actualizar un producto por ID**: `/api/product/update/:id`
- **Eliminar un producto por ID**: `/api/product/delete/:id`

### 🧰 Tecnologías Principales
- **Node.js + Express**: Para la configuración del servidor y endpoints.
- **Mongoose**: Para la conexión con **MongoDB Atlas**.
- **JWT**: Autenticación y autorización de usuarios.
- **bcrypt**: Hashing seguro de contraseñas.
- **dotenv**: Gestión de variables de entorno.

### 📂 Estructura del Proyecto
- `models/`: Esquemas `User` y `Product`.
- `controllers/`: Lógica para registro, login, y CRUD.
- `routes/`: Endpoints conectados a controladores.
- `server.js`: Configuración principal de la app.

---

## 🚀 Pruebas en Render
La aplicación está desplegada en **Render** y puedes probar los endpoints directamente:

### 🌐 Base URL
```bash
https://proyecto-6-udd.onrender.com/
```

---

### 🔍 Endpoints y Cómo Probarlos

#### 1️⃣ **Ruta raíz (opcional)**  
- **Método**: `GET`  
- **URL**: [https://proyecto-6-udd.onrender.com/](https://proyecto-6-udd.onrender.com/)  

---

#### 2️⃣ **Registro de Usuario**
- **Endpoint**: `/api/user/register`  
- **Método**: `POST`  
- **URL**: [https://proyecto-6-udd.onrender.com/api/user/register](https://proyecto-6-udd.onrender.com/api/user/register)  
- **Body (JSON)**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securepassword"
  }
  ```

---

#### 3️⃣ **Iniciar Sesión**
- **Endpoint**: `/api/user/login`  
- **Método**: `POST`  
- **URL**: [https://proyecto-6-udd.onrender.com/api/user/login](https://proyecto-6-udd.onrender.com/api/user/login)  
- **Body (JSON)**:
  ```json
  {
    "email": "john@example.com",
    "password": "securepassword"
  }
  ```

---

#### 4️⃣ **Verificar Token (Mantener Sesión)**
- **Endpoint**: `/api/user/verifytoken`  
- **Método**: `GET`  
- **URL**: [https://proyecto-6-udd.onrender.com/api/user/verifytoken](https://proyecto-6-udd.onrender.com/api/user/verifytoken)  
- **Headers**:
  ```
  Authorization: Bearer <token>
  ```

---

#### 5️⃣ **Actualizar Usuario**
- **Endpoint**: `/api/user/update`  
- **Método**: `PUT`  
- **URL**: [https://proyecto-6-udd.onrender.com/api/user/update](https://proyecto-6-udd.onrender.com/api/user/update)  
- **Headers**:
  ```
  Authorization: Bearer <token>
  ```
- **Body (JSON)**:
  ```json
  {
    "name": "John Updated",
    "email": "updated@example.com"
  }
  ```

---

#### 6️⃣ **Crear un Producto**
- **Endpoint**: `/api/product/create`  
- **Método**: `POST`  
- **URL**: [https://proyecto-6-udd.onrender.com/api/product/create](https://proyecto-6-udd.onrender.com/api/product/create)  
- **Headers**:
  ```
  Authorization: Bearer <token>
  ```
- **Body (JSON)**:
  ```json
  {
    "name": "Producto de prueba",
    "price": 50,
    "description": "Descripción del producto"
  }
  ```

---

#### 7️⃣ **Leer todos los Productos**
- **Endpoint**: `/api/product/readall`  
- **Método**: `GET`  
- **URL**: [https://proyecto-6-udd.onrender.com/api/product/readall](https://proyecto-6-udd.onrender.com/api/product/readall)  

---

#### 8️⃣ **Leer un Producto específico**
- **Endpoint**: `/api/product/readone/:id`  
- **Método**: `GET`  
- **URL**: 
  ```
  https://proyecto-6-udd.onrender.com/api/product/readone/EL_ID_DEL_PRODUCTO
  ```

---

#### 9️⃣ **Actualizar un Producto**
- **Endpoint**: `/api/product/update/:id`  
- **Método**: `PUT`  
- **URL**: 
  ```
  https://proyecto-6-udd.onrender.com/api/product/update/EL_ID_DEL_PRODUCTO
  ```
- **Headers**:
  ```
  Authorization: Bearer <token>
  ```
- **Body (JSON)**:
  ```json
  {
    "name": "Producto Actualizado",
    "price": 60
  }
  ```

---

#### 🔟 **Eliminar un Producto**
- **Endpoint**: `/api/product/delete/:id`  
- **Método**: `DELETE`  
- **URL**: 
  ```
  https://proyecto-6-udd.onrender.com/api/product/delete/EL_ID_DEL_PRODUCTO
  ```
- **Headers**:
  ```
  Authorization: Bearer <token>
  ```

---

## 🛠️ Cómo Empezar Localmente
1. Clona el repositorio:
   ```
   git clone https://github.com/Davidbustosr/Proyecto-6-UDD.git
   ```
2. Instala las dependencias:
   ```
   npm install
   ```
3. Configura las variables de entorno en `.env`:
   ```
   MONGO_URI=tu_uri_de_mongodb
   JWT_SECRET=tu_secreto_jwt
   ```
4. Inicia el servidor:
   ```
   npm start
   ```

---

## 📜 Licencia
Este proyecto está distribuido bajo la licencia MIT.



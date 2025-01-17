// server.js
require('dotenv').config();  // Para leer .env
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Para parsear JSON en el body de la request

// Conexión a MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB Atlas'))
.catch((error) => console.error('Error al conectar a MongoDB Atlas:', error));

// Rutas
app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);

// Ruta de prueba o raíz
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi aplicación Backend con Autenticación!');
});

// Levantar servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
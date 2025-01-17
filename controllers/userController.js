// controllers/userController.js
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Registrar un usuario
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'El correo ya está en uso.' });
    }

    // Crear nuevo usuario
    const newUser = new User({ name, email, password });
    await newUser.save();

    return res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });
  } catch (error) {
    return res.status(500).json({ message: 'Error al registrar usuario', error: error.message });
  }
};

// Iniciar sesión
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Buscar usuario por correo
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Verificar contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Crear token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    return res.status(200).json({
      message: 'Usuario logueado correctamente',
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    return res.status(500).json({ message: 'Error al iniciar sesión', error: error.message });
  }
};

// Verificar token (mantener sesión)
exports.verifyToken = async (req, res) => {
  try {
    // El middleware ya habrá agregado req.user si el token es válido
    const { user } = req;
    if (!user) {
      return res.status(401).json({ message: 'Token no válido o no provisto' });
    }

    return res.status(200).json({ 
      message: 'Token válido',
      user: {
        _id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    return res.status(500).json({ message: 'Error al verificar token', error: error.message });
  }
};

// Actualizar información del usuario
exports.updateUser = async (req, res) => {
  try {
    const { user } = req; // usuario desde el token
    const { name, email, password } = req.body;

    // Encontrar usuario
    const userToUpdate = await User.findById(user._id);
    if (!userToUpdate) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Actualizar campos
    if (name) userToUpdate.name = name;
    if (email) userToUpdate.email = email;
    if (password) {
      // hashear de nuevo la contraseña
      const salt = await bcrypt.genSalt(10);
      userToUpdate.password = await bcrypt.hash(password, salt);
    }

    await userToUpdate.save();

    return res.status(200).json({ 
      message: 'Usuario actualizado exitosamente',
      user: {
        _id: userToUpdate._id,
        name: userToUpdate.name,
        email: userToUpdate.email
      }
    });
  } catch (error) {
    return res.status(500).json({ message: 'Error al actualizar usuario', error: error.message });
  }
};
// controllers/productController.js
const Product = require('../models/productModel');

// Crear un producto
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const userId = req.user._id;  // lo obtenemos desde el token decodificado

    if (!name || !price) {
      return res.status(400).json({ message: 'Se requieren campos nombre y precio' });
    }

    const newProduct = new Product({
      name,
      description,
      price,
      user: userId
    });

    await newProduct.save();

    return res.status(201).json({ message: 'Producto creado exitosamente', product: newProduct });
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear producto', error: error.message });
  }
};

// Leer todos los productos
exports.readAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('user', 'name email');
    return res.status(200).json({ products });
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener productos', error: error.message });
  }
};

// Leer un producto específico
exports.readOneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id).populate('user', 'name email');

    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    
    return res.status(200).json({ product });
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener producto', error: error.message });
  }
};

// Actualizar un producto
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    // Verificamos si este producto pertenece al usuario que hace la actualización (opcional)
    // if (product.user.toString() !== req.user._id.toString()) {
    //   return res.status(403).json({ message: 'No tienes permisos para actualizar este producto' });
    // }

    if (name) product.name = name;
    if (description) product.description = description;
    if (price) product.price = price;

    await product.save();

    return res.status(200).json({ message: 'Producto actualizado exitosamente', product });
  } catch (error) {
    return res.status(500).json({ message: 'Error al actualizar producto', error: error.message });
  }
};

// Eliminar un producto
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    // Verificamos si este producto pertenece al usuario que hace la eliminación (opcional)
    // if (product.user.toString() !== req.user._id.toString()) {
    //   return res.status(403).json({ message: 'No tienes permisos para eliminar este producto' });
    // }

    await product.deleteOne();

    return res.status(200).json({ message: 'Producto eliminado exitosamente' });
  } catch (error) {
    return res.status(500).json({ message: 'Error al eliminar producto', error: error.message });
  }
};
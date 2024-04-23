// controllers/userController.js
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const { generateToken } = require('./auth');

const validateUserData = ({ email, password, name, lastname }) => {
    const errors = [];
    if (!email) errors.push("Email es requerido.");
    if (!password) errors.push("Contraseña es requerida.");
    if (!name) errors.push("Nombre es requerido.");
    if (!lastname) errors.push("Apellido es requerido.");
    if (password && password.length < 6) errors.push("Contraseña debe tener al menos 6 caracteres.");
    if (!/^\S+@\S+\.\S+$/.test(email)) errors.push("Email no tiene un formato válido.");
    return errors;
};

exports.register = async (req, res) => {
    const { email, name, lastname, password, roles } = req.body; 
    const validationErrors = validateUserData({ email, password, name, lastname });
    if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            email,
            name,
            lastname,
            password: hashedPassword,
            roles: roles || ['user']
        });
        await newUser.save();
        const token = generateToken(newUser);
        res.status(201).json({ message: "Usuario registrado exitosamente", token });
    } catch (error) {
        res.status(500).json({ error: "Error al registrar el usuario: " + error.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(401).json({ message: "Credenciales incorrectas" });
        }
        const token = generateToken(user);
        res.json({ message: "Login exitoso", token });
    } catch (error) {
        res.status(500).json({ error: "Error al iniciar sesión: " + error.message });
    }
};

exports.getAllUsers = async (req, res) => {
    console.log("Obteniendo todos los usuarios...");
    try {
        const users = await User.find();
        console.log("Usuarios encontrados:", users.length);
        res.json(users);
        console.log("Fetching all users, verified user ID:", req.user.userId);

    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        res.status(500).json({ error: "Error al obtener usuarios: " + error.message });
    }
};


exports.getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el usuario: " + error.message });
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, lastname, email } = req.body;
    const validationErrors = validateUserData({ email, name, lastname, password: 'valid' }); // Assume password is valid for update
    if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
    }

    try {
        const user = await User.findByIdAndUpdate(id, { name, lastname, email }, { new: true });
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el usuario: " + error.message });
    }
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await User.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el usuario: " + error.message });
    }
};

// Requiere instalar:
// npm install express zod dotenv cors jsonwebtoken

const express = require('express');
const { z } = require('zod');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY;

// =======================
// ACTIVIDAD 1 - Testear una API con Postman
// =======================

app.get('/saludo', (req, res) => {
    res.send("¡Hola, bienvenid@ a la API!");
});

// =======================
// ACTIVIDAD 2 - Validar datos con Zod
// =======================

const esquemaUsuario = z.object({
    nombre: z.string().min(3),
    edad: z.number().int().positive()
});

app.post('/usuarios', (req, res) => {
    try {
        const datosValidados = esquemaUsuario.parse(req.body);
        res.json({ mensaje: 'Usuario válido', datos: datosValidados });
    } catch (error) {
        res.status(400).json(error.errors);
    }
});

// =======================
// ACTIVIDAD 3 - Simular un error de CORS
// =======================

app.get('/productos', (req, res) => {
    res.json([{ id: 1, nombre: "Producto 1" }, { id: 2, nombre: "Producto 2" }]);
});

// =======================
// ACTIVIDAD 4 - Crear token con JWT
// =======================

app.post('/login', (req, res) => {
    const { usuario, clave } = req.body;
    if (usuario === 'admin' && clave === '1234') {
        const token = jwt.sign({ usuario, rol: 'admin' }, SECRET_KEY);
        res.json({ token });
    } else {
        res.status(401).json({ mensaje: 'Credenciales incorrectas' });
    }
});

// =======================
// ACTIVIDAD 5 - Usar token en rutas protegidas
// =======================

function verificarToken(req, res, next) {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ mensaje: 'Token requerido' });

    try {
        const verificado = jwt.verify(token, SECRET_KEY);
        req.usuario = verificado;
        next();
    } catch {
        res.status(403).json({ mensaje: 'Token inválido' });
    }
}

app.get('/perfil', verificarToken, (req, res) => {
    res.json({ mensaje: 'Accediste al perfil', usuario: req.usuario });
});

// =======================
// ACTIVIDAD 6 - Usar variables de entorno
// =======================
// Ya está en uso: PORT y SECRET_KEY

// =======================
// ACTIVIDAD 7 - Validar login con Zod
// =======================

const esquemaLogin = z.object({
    email: z.string().email(),
    password: z.string().min(6)
});

app.post('/login-validado', (req, res) => {
    try {
        const datos = esquemaLogin.parse(req.body);
        res.json({ mensaje: 'Usuario autenticado', datos });
    } catch (error) {
        res.status(400).json(error.errors);
    }
});

// =======================
// ACTIVIDAD 8 - Ruta /admin solo para token con rol admin
// =======================

function verificarAdmin(req, res, next) {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ mensaje: 'Token requerido' });

    try {
        const verificado = jwt.verify(token, SECRET_KEY);
        if (verificado.rol !== 'admin') return res.status(403).json({ mensaje: 'Solo para admins' });
        req.usuario = verificado;
        next();
    } catch {
        res.status(403).json({ mensaje: 'Token inválido' });
    }
}

app.get('/admin', verificarAdmin, (req, res) => {
    res.json({ mensaje: 'Bienvenida, administradora' });
});

// =======================
// ACTIVIDAD 9 - Colección en Postman
// =======================
// Crear colección con POST /login y GET /perfil
// Guardar token como variable y usarlo en los headers

// =======================
// ACTIVIDAD 10 - Proyecto Integrador Mini
// =======================

const esquemaRegistro = z.object({
    nombre: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6)
});

app.post('/registro', (req, res) => {
    try {
        const datos = esquemaRegistro.parse(req.body);
        res.json({ mensaje: 'Registro exitoso', datos });
    } catch (e) {
        res.status(400).json(e.errors);
    }
});

app.post('/login-integrador', (req, res) => {
    const { email, password } = req.body;
    if (email === 'admin@admin.com' && password === '123456') {
        const token = jwt.sign({ email, rol: 'admin' }, SECRET_KEY);
        res.json({ token });
    } else {
        res.status(401).json({ mensaje: 'Login inválido' });
    }
});

app.get('/perfil-integrador', verificarToken, (req, res) => {
    res.json({ mensaje: 'Accediste al perfil privado', usuario: req.usuario });
});

app.get('/admin-integrador', verificarToken, verificarAdmin, (req, res) => {
    res.json({ mensaje: 'Bienvenida al panel de administración' });
});

// =======================
// INICIAR SERVIDOR
// =======================

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});

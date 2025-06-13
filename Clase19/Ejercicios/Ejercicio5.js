/*Actividad 5: Autenticación Básica con Middleware Personalizado
Consigna:

Implementa un middleware personalizado que verifique si la solicitud incluye un encabezado Authorization con un token válido.
Si el token no es válido o falta, responde con un error 401.
Aplica el middleware a una ruta protegida /api/secure-data que devuelva datos confidenciales.
*/

// Middleware de autenticación
const authenticate = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader || authHeader !== 'Bearer my-secret-token') {
    return res.status(401).json({ error: 'Acceso no autorizado' });
  }
  next(); // Continuar si el token es válido
};

// Ruta protegida con el middleware de autenticación
app.get('/api/secure-data', authenticate, (req, res) => {
  res.status(200).json({ data: 'Este es un dato confidencial' });
});

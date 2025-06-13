/*Actividad 3: Crear un Middleware Personalizado
Consigna:

Implementa un middleware para registrar en la consola cada solicitud recibida con su método y URL.
Úsalo en la API para registrar todas las solicitudes.
*/

// Middleware personalizado para registrar solicitudes
const requestLogger = (req, res, next) => {
  console.log(`Solicitud recibida: ${req.method} ${req.url}`);
  next(); // Continuar al siguiente middleware o controlador
};

// Usar el middleware en todas las rutas
app.use(requestLogger);

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
      return res.status(403).json({ message: 'Acceso denegado' });
    }
  
    // Aquí puedes verificar el token con JWT u otro sistema de autenticación
    // Suponiendo que el token es válido, continuamos
    next();
  };
  
  module.exports = authMiddleware;
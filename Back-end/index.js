import express from 'express';
import path from 'path';
import sequelize from './config/db.js';
import { Product, User, Order, Cart, Payment, Contact, Review } from './models/index.js';
import postRouter from './routes/Prueba.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON en las peticiones
app.use(express.json());

// Ruta de la API para obtener los usuarios
app.use("/prueba", postRouter);

// Servir archivos estáticos de la carpeta 'dist'
app.use(express.static(path.join(process.cwd(), 'Front-end', 'dist')));

// Para cualquier otra ruta, servir el archivo index.html de la carpeta 'dist'
app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'Front-end', 'dist', 'index.html'));
});


// Conectar con la base de datos y sincronizar modelos
sequelize.authenticate()
  .then(() => {
    console.log('Conexión exitosa a la base de datos MySQL con Sequelize');
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log('Modelos sincronizados con la base de datos');
  })
  .catch(err => {
    console.error('Error conectando a la base de datos:', err);
  });

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});

import express from 'express';
import path from 'path';  // Importa 'path' para utilizarlo más adelante

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'Front-end', 'dist', 'index.html')); // process.cwd() apunta a la raíz del proyecto
});

export default router;
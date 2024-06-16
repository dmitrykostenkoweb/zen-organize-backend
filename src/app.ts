import express from 'express';
import areaRoutes from './routes/areaRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // middleware do parsowania JSON

// Użycie tras dla Areas
app.use(areaRoutes);

// Inicjalizacja serwera
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

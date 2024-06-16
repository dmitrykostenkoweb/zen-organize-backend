import { Router } from 'express';
import { getAllAreas, createArea, modifyArea, removeArea } from '../controllers/areaController';

const router = Router();

router.get('/areas', getAllAreas);
router.post('/areas', createArea);
router.put('/areas/:id', modifyArea);
router.delete('/areas/:id', removeArea);

export default router;

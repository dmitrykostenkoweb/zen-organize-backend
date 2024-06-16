import { Request, Response } from 'express';
import { getAreas, addArea, updateArea, deleteArea } from '../services/areaService';

export const getAllAreas = async (req: Request, res: Response): Promise<void> => {
    try {
        const areas = await getAreas();
        res.json(areas);
    } catch (err) {
        handleDbError(err, res);
    }
};

export const createArea = async (req: Request, res: Response): Promise<void> => {
    const { name, description, imageURL } = req.body;
    try {
        const newArea = await addArea(name, description, imageURL);
        res.json(newArea);
    } catch (err) {
        handleDbError(err, res);
    }
};

export const modifyArea = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { name, description, imageURL } = req.body;
    try {
        const updatedArea = await updateArea(id, name, description, imageURL);
        res.json(updatedArea);
    } catch (err) {
        handleDbError(err, res);
    }
};

export const removeArea = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        await deleteArea(id);
        res.json({ message: 'Area deleted successfully' });
    } catch (err) {
        handleDbError(err, res);
    }
};

const handleDbError = (err: unknown, res: Response): void => {
    if (err instanceof Error) {
        console.error(err.message);
        res.status(500).send('Server error');
    } else {
        console.error('Unexpected error', err);
        res.status(500).send('Unexpected server error');
    }
};

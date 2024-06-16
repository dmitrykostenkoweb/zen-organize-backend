import pool from '../db';

export const getAreas = async (): Promise<any[]> => {
    const result = await pool.query('SELECT * FROM Areas');
    return result.rows;
};

export const addArea = async (name: string, description: string, imageURL: string): Promise<any> => {
    const result = await pool.query(
        'INSERT INTO Areas (Name, Description, ImageURL) VALUES ($1, $2, $3) RETURNING *',
        [name, description, imageURL]
    );
    return result.rows[0];
};

export const updateArea = async (id: string, name: string, description: string, imageURL: string): Promise<any> => {
    const result = await pool.query(
        'UPDATE Areas SET Name = $1, Description = $2, ImageURL = $3 WHERE AreaID = $4 RETURNING *',
        [name, description, imageURL, id]
    );
    return result.rows[0];
};

export const deleteArea = async (id: string): Promise<void> => {
    await pool.query('DELETE FROM Areas WHERE AreaID = $1', [id]);
};

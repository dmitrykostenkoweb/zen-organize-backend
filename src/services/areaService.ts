import pool from "../db";
import { Area } from "../models/areaModel";
import { QueryResult } from "pg";

export const getAllAreas = async (): Promise<Area[]> => {
  const result: QueryResult<Area> = await pool.query("SELECT * FROM Areas");
  return result.rows;
};

export const getAreaById = async (id: number): Promise<Area> => {
  const result: QueryResult<Area> = await pool.query(
    "SELECT * FROM Areas WHERE AreaID = $1",
    [id],
  );
  return result.rows[0];
};

export const createArea = async (
  name: string,
  description?: string,
  imageUrl?: string,
): Promise<Area> => {
  const result: QueryResult<Area> = await pool.query(
    "INSERT INTO Areas (Name, Description, ImageURL) VALUES ($1, $2, $3) RETURNING *",
    [name, description, imageUrl],
  );
  return result.rows[0];
};

export const updateArea = async (
  id: number,
  name: string,
  description?: string,
  imageUrl?: string,
): Promise<Area> => {
  const result: QueryResult<Area> = await pool.query(
    "UPDATE Areas SET Name = $1, Description = $2, ImageURL = $3 WHERE AreaID = $4 RETURNING *",
    [name, description, imageUrl, id],
  );
  return result.rows[0];
};

export const deleteArea = async (id: number): Promise<void> => {
  await pool.query("DELETE FROM Areas WHERE AreaID = $1", [id]);
};

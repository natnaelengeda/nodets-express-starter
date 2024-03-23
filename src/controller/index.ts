import { Request, Response } from "express";

export function index(req: Request, res: Response) {
  try {
    res.status(200).send('Index Controller');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}
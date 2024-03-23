import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

// Create an API Key and Add it to thte .env file
const API_KEY = process.env.API_KEY || '';

export function apiAuthMiddleware(req: Request, res: Response, next: NextFunction) {
  const apiKey = req.headers['x-api-key'];
  const allowedIP = ['asdf'];
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  // Add the following paths to the allowedPaths array
  const allowedPaths = [
    'asdf',
    '/getImage',
  ];

  if (
    apiKey === API_KEY ||
    allowedPaths.some(path => req.path.includes(path)) ||
    allowedIP.includes(ip?.toString() || '')
  ) {
    next();
  } else if (!apiKey) {
    return res.status(401).send('Unauthorized');
  } else {
    return res.status(401).send('Unauthorized');
  }
}
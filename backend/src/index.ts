import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';

import './container';
import './database/connection'

import routes from './routes';
import AppError from './AppError';

const app = express();

app.use(express.json());
app.use(routes);


app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333);
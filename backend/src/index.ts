import 'reflect-metadata';
import express from 'express';

import './container';
import './database/connection'

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);
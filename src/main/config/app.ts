import express from 'express';
import { config as dotenv } from 'dotenv';
import routes from './config.routes';
import configMiddlewares from './config.middlewares';

dotenv();

const app = express();

configMiddlewares(app);

// ROUTES INIT
routes(app);

export default app;

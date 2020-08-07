import express from 'express'
import ServerRoutes from './routes/routes'
const server = express();


/*Registering API routes*/
ServerRoutes(server);

const app = server;
export default app;




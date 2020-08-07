import express from 'express'
import ServerRoutes from './routes/routes'
const server = express();
const port = 8080;

/*Registering API routes*/
ServerRoutes(server);

server.listen(port, error => {
    if (error){
        return console.error(error);
    }
    return console.log(`server is listening on ${port}`);
});


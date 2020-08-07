import Server from './server'
const port = 8080;

Server.listen(port, error => {
    if (error){
        return console.error(error);
    }
    return console.log(`server is listening on ${port}`);
});

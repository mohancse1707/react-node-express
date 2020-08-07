import { Express } from 'express';
import axios from 'axios';
import DataCache from "../cache/data-cache";

const getBeerRecipes = () => {
    const url = 'https://api.punkapi.com/v2/beers';
    return axios.get(url, { headers: { ['Content-Type']: 'application/json' } });
}

const initializeCache = new DataCache(getBeerRecipes, 1);

const ServerRoutes = (server: Express) => {

    /* Load the data on server startup and keep it in cache manager */
    server.get('/', async (req, res) => {
       return res.send('Server is up');
    });

    server.get('/getAllBeerRecipes', async (req, res) => {
        return res.json(await initializeCache.getData());
    });

    /* Search data by bearName */
    server.get('/search/:beerName', async (req, res) => {
        const list : any[] = await initializeCache.getData();
        console.log('Search parameter value', req.params.beerName);
        const listFilter = list.filter(value => value.name === req.params.beerName);
        return res.json(listFilter);
    });
};

export default ServerRoutes
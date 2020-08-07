/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

import axios from 'axios';
import { REQUEST, SUCCESS, FAILURE } from '../../shared/reducers/action-type.util';
import { IBeerRecipes } from 'app/shared/models/beer-recipes';

export const ACTION_TYPES = {
    FETCH_BEERS: 'BeerRecipes/FETCH_BEERS',
    SEARCH_BEER: 'BeerRecipes/SEARCH_BEER',
    RESET: 'BeerRecipes/RESET'
};

const initialState = {
    loading: false,
    errorMessage: null,
    beers: [] as IBeerRecipes[],
    updating: false,
    updateSuccess: false,
    totalItems: 0
};

export type BeerRecipesState = Readonly<typeof initialState>;

export default (state: BeerRecipesState = initialState, action): BeerRecipesState => {

    switch (action.type) {
        case REQUEST(ACTION_TYPES.FETCH_BEERS):
        case REQUEST(ACTION_TYPES.SEARCH_BEER):
            return {
                ...state,
                errorMessage: null,
                updateSuccess: false,
                loading: true
            };
        case FAILURE(ACTION_TYPES.FETCH_BEERS):
        case FAILURE(ACTION_TYPES.SEARCH_BEER):
            return {
                ...state,
                loading: false,
                updating: false,
                updateSuccess: false,
                errorMessage: action.payload
            };
        case SUCCESS(ACTION_TYPES.FETCH_BEERS):
            return {
                ...state,
                loading: false,
                beers: action.payload.data,
                totalItems: 0
            };
        case SUCCESS(ACTION_TYPES.SEARCH_BEER):
            return {
                ...state,
                loading: false,
                beers: action.payload.data,
                totalItems: 0
            };
        default:
            return state;
    }
};

export const getAllBeerRecipes = () => ({
    type: ACTION_TYPES.FETCH_BEERS,
    payload: axios.get(`/getAllBeerRecipes`)
});

export const searchBeerRecipes = beerName => {
    const searchURL = `/search/${beerName}`;
    return {
        type: ACTION_TYPES.SEARCH_BEER,
        payload: axios.get(searchURL)
    };
};

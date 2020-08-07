import configureStore from 'redux-mock-store';
import promiseMiddleware from 'redux-promise-middleware';
import axios from 'axios';
import thunk from 'redux-thunk';
import sinon from 'sinon';



// @ts-ignore

import { REQUEST, SUCCESS } from 'app/shared/reducers/action-type.util';
import { ACTION_TYPES, getAllBeerRecipes, searchBeerRecipes } from 'app/module/beer-recipes/beer-recipes.reducer';

describe('Beer Recipes reducer tests', () => {

    describe('Actions', () => {
        let store;
        const resolvedObject = { value: 'whatever' };
        beforeEach(() => {
            const mockStore = configureStore([thunk, promiseMiddleware]);
            store = mockStore({});
            axios.get = sinon.stub().returns(Promise.resolve(resolvedObject));
        });

        it('dispatches FETCH_BEERS_PENDING and FETCH_BEERS_FULFILLED actions', async () => {
            const expectedActions = [
                {
                    type: REQUEST(ACTION_TYPES.FETCH_BEERS)
                },
                {
                    type: SUCCESS(ACTION_TYPES.FETCH_BEERS),
                    payload: resolvedObject
                }
            ];
            await store.dispatch(getAllBeerRecipes()).then(() => expect(store.getActions()).toEqual(expectedActions));
        });
        it('dispatches FETCH_BEERS_PENDING and FETCH_BEERS_FULFILLED actions', async () => {
            const expectedActions = [
                {
                    type: REQUEST(ACTION_TYPES.SEARCH_BEER)
                },
                {
                    type: SUCCESS(ACTION_TYPES.SEARCH_BEER),
                    payload: resolvedObject
                }
            ];
            await store.dispatch(searchBeerRecipes('Buzz')).then(() => expect(store.getActions()).toEqual(expectedActions));
        });
    });
});

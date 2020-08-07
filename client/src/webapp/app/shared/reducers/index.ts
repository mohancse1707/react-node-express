/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

import { combineReducers } from 'redux';
import beerRecipesState, { BeerRecipesState } from '../../module/user-management/beer-recipes.reducer';

export interface IRootState {
    readonly beerRecipesState: BeerRecipesState;
}

const rootReducer = combineReducers<IRootState>({
    beerRecipesState
});

export default rootReducer;

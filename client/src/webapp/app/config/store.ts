/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer, { IRootState } from 'app/shared/reducers';

const logger = createLogger();

const defaultMiddleWares = [
    thunk,
    promiseMiddleware
];
const composedMiddleWares = middleWares =>
    process.env.NODE_ENV === 'development'
        ? compose(
        applyMiddleware(...defaultMiddleWares, ...middleWares)
        )
        : compose(applyMiddleware(...defaultMiddleWares, ...middleWares));

const initialize = (initialState?: IRootState, middlewares = []) => createStore(reducer, initialState, composedMiddleWares(middlewares));

export default initialize;

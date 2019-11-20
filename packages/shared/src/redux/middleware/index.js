import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import createSagaMiddleware from 'redux-saga';

// create the saga middleware
export const sagaMiddleware = createSagaMiddleware();

const middleware = [thunk, apiMiddleware, sagaMiddleware];
export default middleware;

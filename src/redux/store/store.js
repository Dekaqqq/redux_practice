import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import timerReducer from '../timer/timerReducer';
// import stepReducer from '../reducers/stepReducer';
import postsReducer from '../posts/postsReducer';
// import logger from '../middleware/logger';
import throttle from '../middleware/throttle';
import stateValidator from '../middleware/state-validation';

const rootReducer = combineReducers({
    timer: timerReducer,
    posts: postsReducer,
});

// const thunk = ({ dispatch, getState }) => next => action =>
//     typeof action === 'function' ? action(dispatch, getState) : next(action);

const enhancer = applyMiddleware(throttle, logger, stateValidator, ReduxThunk);

// const devTools =
//     window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import dictionary from "./modules/dictionary";
import thunk from "redux-thunk";

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);

const rootReducer = combineReducers({ dictionary });

const store = createStore(rootReducer, enhancer);

export default store;

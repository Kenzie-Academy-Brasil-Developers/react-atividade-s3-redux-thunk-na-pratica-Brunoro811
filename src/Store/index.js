//adiciona o applyMiddleweare do priprio redux
import { createStore, combineReducers, applyMiddleware } from "redux";
//tambem adiciona o thunk
import thunk from "redux-thunk";

import userReducer from "./modules/User/reducer";

const reducers = combineReducers({ user: userReducer });
//alem do recuders, coloca o applymiddleware passando o thunk
const store = createStore(reducers, applyMiddleware(thunk));
export default store;

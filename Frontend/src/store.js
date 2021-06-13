import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducers } from "./reducers/productReducers.js";
const reducer = combineReducers({
  prouctList: productListReducers,
});

const initialSatate = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialSatate,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

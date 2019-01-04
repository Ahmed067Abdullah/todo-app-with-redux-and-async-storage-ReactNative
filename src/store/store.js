import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import todoReducer from "./reducers/todos";

const store = createStore(todoReducer, applyMiddleware(thunk));

export default store;

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./Reducer";

export const rootStore = createStore(rootReducer, applyMiddleware(thunk));

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers";
import { initialState } from "./initialState";

// middleware
const middleware = [thunk];

// creating store
export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export type stateType  = ReturnType<typeof store.getState>
export type dispatchType = ReturnType<typeof store.dispatch>

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
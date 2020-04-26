import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/reducers";
import thunk from "redux-thunk";
export default function configureStore(initialState) {
  const enhanceCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    enhanceCompose(applyMiddleware(thunk))
  );
}

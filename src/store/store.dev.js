import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const sagaMiddleware = createSagaMiddleware();

export default function(initialState = {}) {
  // Middleware and Enhancers
  const enhancers = [applyMiddleware(sagaMiddleware)];

  // Persisting state
  const persistConfig = {
    key: "peopleserve",
    storage,
    blacklist: ["auth"]
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  window.devToolsExtension && enhancers.push(window.devToolsExtension());

  const store = createStore(
    persistedReducer,
    initialState,
    compose(...enhancers)
  );
  const persistor = persistStore(store);

  // hot reloading reducers
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers", () => {
      const nextReducer = require("./reducers").default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  sagaMiddleware.run(sagas);

  return { store, persistor };
}

import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "./dux/rootReducer";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./dux/rootSaga";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: hardSet,
  version: 0,
  keyPrefix: ""
};

export default function configureStore(initialState = {}) {
  // const persistedReducer = persistReducer(persistConfig, connectRouter(history)(combineReducers(rootReducer)));
  const persistedReducer = persistCombineReducers(persistConfig, rootReducer);
  const sagaMiddleware = createSagaMiddleware();

  const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  const store = createStore(persistedReducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);

  const persistor = persistStore(store);

  return { store, persistor };
}

// const persistedReducer = persistCombineReducers(persistConfig, rootReducer);

// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//       })
//     : compose;

// const sagaMiddleware = createSagaMiddleware();
// const enhancer = compose(
//   applyMiddleware(sagaMiddleware),
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// );

// const store = createStore(persistedReducer, initialState, enhancer);

// sagaMiddleware.run(rootSaga);

// export const persistor = persistStore(store);

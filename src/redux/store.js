import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import localForage from "localforage";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
const initialState = {}
const middleware = [thunk];

const persistConfig = { 
  key: 'root',
  storage: localForage,
  stateReconciler: autoMergeLevel2
 };

 const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  pReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
  )
);

export const persistor = persistStore(store);
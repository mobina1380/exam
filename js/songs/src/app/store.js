import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga';
import resultReducer from "../features/search/slice";
 import pageReducer from "../features/page/pageSlice";
 import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'root',
  storage,
}
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const persistedReducer = persistReducer(persistConfig, resultReducer  )

export const store = configureStore({
  reducer: {
  
     result: persistedReducer,
     page:pageReducer
  },
  middleware: [sagaMiddleware, ]
});

export default function configureAppStore(){
  sagaMiddleware.run(rootSaga)
  return {store}
}

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);


import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import { carRentalApp } from './operations';

const reducers = combineReducers({
  [carRentalApp.reducerPath]: carRentalApp.reducer,
});

// Конфігурація для redux-persist
const persistConfig = {
  key: 'root', // ключ для локального сховища
  storage,
  // інші налаштування, якщо потрібно
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Створюємо persist-стор для збереження стану в локальному сховищі
export const persistor = persistStore(store);

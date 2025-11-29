import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { baseApi } from './api/baseApi';

// Unified Redux Persist configuration
const persistConfig = {
  key: 'root',
  storage,
};

// Persisted auth reducer
const persistedAuthReducer = persistReducer({ ...persistConfig, key: 'auth' }, authReducer);

// Configure the Redux store
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

// Persistor for rehydration
export const persistor = persistStore(store);

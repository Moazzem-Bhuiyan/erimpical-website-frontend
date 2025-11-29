'use client';
import { Provider } from 'react-redux';
import { persistor, store } from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from '@/app/loading';

export default function ReduxProviders({ children }) {
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <div className="flex justify-center items-center min-h-screen">
            <Loader />
          </div>
        }
        persistor={persistor}
      >
        {children}
      </PersistGate>
    </Provider>
  );
}

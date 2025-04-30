import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { persister, store } from './Redux/store/index.js';
import { PersistGate } from 'redux-persist/integration/react'
// import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // </StrictMode>,
  <BrowserRouter>
        <Provider store={store}>
            <PersistGate persistor={persister}>
                <App />
            </PersistGate>
        </Provider>
    </BrowserRouter>
)

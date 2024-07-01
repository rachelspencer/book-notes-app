import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthContextProvider } from './context/authContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { SearchContextProvider } from './context/searchContext';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <React.StrictMode>
        <AuthContextProvider>
            {/* <SearchContextProvider> */}
                <BrowserRouter>
                    <App />
                    <ToastContainer />
                </BrowserRouter>
            {/* </SearchContextProvider> */}
        </AuthContextProvider>
    </React.StrictMode>
);

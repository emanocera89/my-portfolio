import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_es from './translations/es/global.json';
import global_en from './translations/en/global.json';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN0hf2VUzqGqa0DsVqAVWxnfK7CUHgseA",
  authDomain: "portfolio-enocera.firebaseapp.com",
  projectId: "portfolio-enocera",
  storageBucket: "portfolio-enocera.appspot.com",
  messagingSenderId: "18971018694",
  appId: "1:18971018694:web:21607858810bc263da5ec7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const lsLang = localStorage.getItem('lang');
const lang = lsLang ? lsLang : 'en';
localStorage.setItem('lang', lang);
// language
i18next.init({
  interpolation: { escapeValue: false },
  lng: lang,
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </I18nextProvider>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

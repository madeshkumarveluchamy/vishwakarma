import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import global_en from "./Components/Local/en/global.json";
import global_ta from "./Components/Local/ta/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",  // Corrected from "length" to "lng"
  resources: {
    en: {
      global: global_en
    },
    ta: {
      global: global_ta
      
    }
  }
});

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
      
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}

reportWebVitals();
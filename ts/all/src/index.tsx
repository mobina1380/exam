import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import configureStore from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {IntlProvider} from 'react-intl';
import Persian from '../src/lang/fa.json';
import English from '../src/lang/en.json';


const {store} = configureStore();

const container = document.getElementById('root')!;
const root = createRoot(container);
let lang;
lang=Persian;
let messages=Persian;
let locale='fa';
root.render(
  <React.StrictMode>

    <Provider store={store}>
        <IntlProvider  messages={messages} locale={locale}>
      <App />
        </IntlProvider>
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

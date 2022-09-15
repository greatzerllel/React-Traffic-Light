import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // JS
import './App.css'; // MY CSS

import Main from './Main'; // PRINCIPAL COMPONENT

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Main/>); // Spread operator
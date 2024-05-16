import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/router';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
     <App/>
    </Provider>

  </React.StrictMode>,
)

// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "./redux/store/store";
// import AppRouter from "./Router/router";
//
// function App() {
//     return (
//         <Provider store={store}>
//             <BrowserRouter>
//                 <AppRouter />
//             </BrowserRouter>
//
//         </Provider>
//     );
// }
//
// export default App;


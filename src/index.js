import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import "react-toastify/dist/ReactToastify.min.css";
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import * as serviceWorker from './serviceWorker';

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

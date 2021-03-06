import React from 'react';
import ReactDOM from 'react-dom';
import {todoApp} from './redux/redusers'
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";

import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {TodoApp} from "./containers/TodoApp";
//import {Provider} from "./components/Provider";

// ReactDOM.render(<App />, document.getElementById('root'));


ReactDOM.render(
        <Provider
        store={createStore(todoApp)}
    >
        <TodoApp/>
    </Provider>,
    document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();

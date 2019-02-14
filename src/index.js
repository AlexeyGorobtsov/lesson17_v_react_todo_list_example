import React from 'react';
import ReactDOM from 'react-dom';
import {store, todoApp} from './redux/redusers'
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";

import './index.css';
import App from './App';
// import {TodoApp} from "./components/TodoApp";
import {TodoApp} from "./containers/TodoApp";
import {Provider} from "./components/Provider";

// ReactDOM.render(<App />, document.getElementById('root'));

const render = () => {
    ReactDOM.render(
        <Provider
            store={createStore(todoApp)}
        >
            <TodoApp/>
        </Provider>,
        document.getElementById('root')
    )
};


store.subscribe(render);
render();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {TodoApp} from "./components/TodoApp";
import {store} from './redux/redusers'

// ReactDOM.render(<App />, document.getElementById('root'));
const render = () => {
    ReactDOM.render(
        <TodoApp
            {...store.getState()}
        />,
        document.getElementById('root')
    )
};


store.subscribe(render);
render();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

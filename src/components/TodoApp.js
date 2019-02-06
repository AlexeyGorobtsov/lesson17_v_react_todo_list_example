import React from 'react';
import {store}   from '../redux/redusers';

let nextTodoId = 0;

export class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }
    render() {
        return (
            <div>
                <input ref={this.input}/>
                <button
                    onClick={() => {
                        store.dispatch({
                            type: 'ADD_TODO',
                            text: this.input.current.value,
                            id: nextTodoId++
                        });
                        this.input.current.value = '';
                    }}
                >
                    Add Todo
                </button>
                <ul>
                    {this.props.todos.map(
                        todo =>
                            <li key={todo.id}>
                                {todo.text}
                            </li>
                    )}
                </ul>
            </div>
        )
    }
}
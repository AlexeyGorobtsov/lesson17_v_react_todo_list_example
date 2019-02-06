import React from 'react';
import {FilterLink, getVisibleTodos, store} from '../redux/redusers';

let nextTodoId = 0;

export class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }

    render() {
        const {todos, visibilityFilter } = this.props;
        // console.log(this)
        const visibleTodos = getVisibleTodos(
            todos,
            visibilityFilter
        );
        // console.log(todos)
        // console.log(visibilityFilter)
        // console.log(visibleTodos)
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
                    {visibleTodos.map(
                        todo =>
                            <li
                                key={todo.id}
                                onClick={() => {
                                    store.dispatch({
                                        type: 'TOGGLE_TODO',
                                        id: todo.id
                                    })
                                }}
                                style={{
                                    textDecoration:
                                        todo.completed ?
                                            'line-through' :
                                            'none'
                                }}
                            >
                                {todo.text}
                            </li>
                    )}
                </ul>
                <p>
                    Show:
                    {' '}
                    <FilterLink
                        filter={'SHOW_ALL'}
                        currentFilter={visibilityFilter}
                    >
                        All
                    </FilterLink>
                    {' '}
                    <FilterLink
                        filter={'SHOW_ACTIVE'}
                        currentFilter={visibilityFilter}
                    >
                        Active
                    </FilterLink>
                    {' '}
                    <FilterLink
                        filter={'SHOW_COMPLETED'}
                        currentFilter={visibilityFilter}
                    >
                        Completed
                    </FilterLink>
                </p>
            </div>
        )
    }
}
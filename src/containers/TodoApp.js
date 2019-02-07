import React from 'react';
import {FilterLink, getVisibleTodos, store} from "../redux/redusers";

import {TodoList} from "../components/TodoList";
import {AddTodo} from "../components/AddTodo";
import {Footer} from "../components/Footer";

let idCount = 0;

export class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.input  = React.createRef();
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleAddTodo() {
        store.dispatch({
            type: 'ADD_TODO',
            text: this.input.current.value,
            id: idCount++
        });
        this.input.current.value = '';
    }

    render() {
        const {
            todos,
            visibilityFilter
        } = this.props;
        const visibleTodos = getVisibleTodos(
            todos,
            visibilityFilter
        );
        return (
            <div>
                <AddTodo
                    onAddClick={ text=>
                        store.dispatch({
                            type: 'ADD_TODO',
                            text: text,
                            id: idCount++
                        })
                    }
                />
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={id => store.dispatch({
                        type: 'TOGGLE_TODO',
                        id
                    })}
                />
                <Footer
                    visibilityFilter={visibilityFilter}
                    onFilterClick={filter =>
                    store.dispatch({
                        type: 'SET_VISIBILITY_FILTER',
                        filter
                    })}
                />

            </div>

        )
    }
}
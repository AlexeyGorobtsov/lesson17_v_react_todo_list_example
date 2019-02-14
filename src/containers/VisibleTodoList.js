import React from 'react';
import PropTypes from 'prop-types';

import {getVisibleTodos, store} from "../redux/redusers";
import {TodoList} from "../components/TodoList";

export class VisibleTodoList extends React.Component {

    componentDidMount() {
        console.log(this)
        const { store } = this.context;
         this.unsubscribe = store.subscribe(() =>
        this.forceUpdate())
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const { store } = this.context;
        const props = this.props;
        const state = store.getState();

        return (
            <TodoList
                todos={
                    getVisibleTodos(
                        state.todos,
                        state.visibilityFilter
                    )
                }
                onTodoClick={ id =>
                    store.dispatch({
                        type: 'TOGGLE_TODO',
                        id
                    })
                }
            />
        )
    }
}

VisibleTodoList.contextTypes = {
    store: PropTypes.object
}
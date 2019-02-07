import React from 'react';

import { store } from "../redux/redusers";
import {Link} from "../components/Link";

export class FilterLink extends React.Component {


    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate())
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const props = this.props;
        console.log(props);
        const state = store.getState();

        return(
            <Link
                active={
                    props.filter === state.visibilityFilter
                }
                onClick={() =>
                    store.dispatch({
                        type: 'SET_VISIBILITY_FILTER',
                        filter: props.filter
                    })
                }
            >
                {props.children}
            </Link>
        )
    }
}
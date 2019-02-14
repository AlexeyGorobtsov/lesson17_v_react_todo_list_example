import React from 'react';
import PropTypes from 'prop-types';

import { store } from "../redux/redusers";
import {Link} from "../components/Link";

export class FilterLink extends React.Component {


    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => this.forceUpdate())
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const props = this.props;
        console.log(props);
        const { store } = this.context;
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

FilterLink.contextTypes = {
    store: PropTypes.object
};
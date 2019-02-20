import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {store} from "../redux/redusers";
import {Link} from "../components/Link";


// export class FilterLink extends React.Component {
//
//
//     componentDidMount() {
//         const { store } = this.context;
//         this.unsubscribe = store.subscribe(() => this.forceUpdate())
//     }
//
//     componentWillUnmount() {
//         this.unsubscribe();
//     }
//
//     render() {
//         const props = this.props;
//         console.log(props);
//         const { store } = this;
//         const state = store.getState();
//
//         return(
//             <Link
//                 active={
//                     props.filter === state.visibilityFilter
//                 }
//                 onClick={() =>
//                     store.dispatch({
//                         type: 'SET_VISIBILITY_FILTER',
//                         filter: props.filter
//                     })
//                 }
//             >
//                 {props.children}
//             </Link>
//         )
//     }
// }
//
// FilterLink.contextTypes = {
//     store: PropTypes.object
// };

const mapStateToLinkProps = (
    state,
    ownProps
) => {
    return {
        active:
            ownProps.filter ===
            state.visibilityFilter
    }
};

const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

const mapDispatchToLinkProps = (
    dispatch,
    ownProps
) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
};

export const FilterLink = connect(
    mapStateToLinkProps,
    mapDispatchToLinkProps
)(Link);
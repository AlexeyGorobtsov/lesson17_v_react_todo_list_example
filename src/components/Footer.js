import React from 'react';
// import {FilterLink} from "../redux/redusers";
import { FilterLink } from '../containers/FilterLink'
export const Footer = ({store}) => (
    <p>
        <FilterLink
            filter='SHOW_ALL'
            store={store}
        >
            All
        </FilterLink>
        {', '}
        <FilterLink
            filter='SHOW_ACTIVE'
            store={store}
        >
            Active
        </FilterLink>
        {', '}
        <FilterLink
            filter='SHOW_COMPLETED'
            store={store}
        >
            Completed
        </FilterLink>
    </p>
);
import React from 'react';
// import {FilterLink} from "../redux/redusers";
import { FilterLink } from '../containers/FilterLink'
export const Footer = ({store}) => (
    <p>
        <FilterLink
            filter='SHOW_ALL'
        >
            All
        </FilterLink>
        {', '}
        <FilterLink
            filter='SHOW_ACTIVE'
        >
            Active
        </FilterLink>
        {', '}
        <FilterLink
            filter='SHOW_COMPLETED'
        >
            Completed
        </FilterLink>
    </p>
);
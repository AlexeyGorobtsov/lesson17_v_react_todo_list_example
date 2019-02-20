import React from 'react';
import { connect } from 'react-redux';
let nextTodoId = 0;

// export const AddTodo = (props, {
//     store
// }) => {
//     let input;
//     return(
//         <div>
//             <input ref={node => {
//                 input = node;
//             }}/>
//             <button
//                 onClick={
//                     () => {
//                         store.dispatch({
//                             type: 'ADD_TODO',
//                             id: nextTodoId++,
//                             text: input.value
//                         });
//                         input.value = '';
//                     }
//                 }
//             >
//                 Add Todo
//             </button>
//         </div>
//     )
// };
//
// AddTodo.contextTypes = {
//     store: PropTypes.object
// }

const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
};

let AddTodo = ({
    dispatch
}) => {
    let input;
    return(
        <div>
            <input ref={node => {
                input = node;
            }}/>
            <button
                onClick={
                    () => {
                        dispatch(addTodo(input.value));
                        input.value = '';
                    }
                }
            >
                Add Todo
            </button>
        </div>
    )
};

export default AddTodo = connect()(AddTodo)
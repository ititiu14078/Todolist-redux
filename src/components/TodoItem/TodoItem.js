import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../../actions/removeTodo';

function TodoItem(props){
    const {todo, index} = props;
    return(
        <div>
            <li>
                {todo}
                <button onClick={() => removeTodo(index)}>X</button>
            </li>
        </div>
    );
}
export default connect(null, { removeTodo })(TodoItem);
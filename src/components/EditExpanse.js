import React from 'react';
import ReactDOM from 'react-dom';
const EditExpanse = (props) => {
    console.log(props);
    return (
        <div>
            this is edit with edit id {props.match.params.id}
        </div>
    );
};
export default EditExpanse;
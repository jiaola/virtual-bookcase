import React from 'react';
const ShelfItem = props => (
    <button onClick={props.onClick} style={props.style}>
        {props.label && <span>{props.label}</span>}
    </button>
)
export default ShelfItem;
import React from 'react';
import { connect } from 'react-redux';


const mapDispatchToProps = dispatch => ({
    add: () => dispatch( {type:"ADD"}),
    addDix: () => dispatch({type:"ADDDIX"}),
    remove: () => dispatch({type:"REMOVE"}),
    removeDix: () => dispatch({type: "REMOVEDIX"}),
    reset: () => dispatch({type: "RESET"})
});
const mapStateToprops = state => ({
    value : state
});

const compteurComponent = ( {value, add, addDix, remove, removeDix, reset} ) => (
    <div>
    <p>{value}</p>
    <button onClick={add} id='add'>Add</button>
    <button onClick={addDix} id='addDix'>Add 10</button>
    <button onClick={remove} id='remove'> Remove</button>
    <button onClick={removeDix} id='removeDix'>RemoveDix</button>
    <button onClick={reset} id='reset'> Reset</button>
    </div>
);

export default  connect(mapStateToprops, mapDispatchToProps)(compteurComponent);
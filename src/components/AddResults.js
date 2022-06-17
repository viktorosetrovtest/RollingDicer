import React, {useState} from 'react';

import Button from './Button'

function AddResults(props) {
  const [enteredNumber, setEnteredNumber] = useState('');

  function addNumberHandler(event) {
    event.preventDefault();
    if (enteredNumber.trim().length === 0) {
      return 
    }
    if (+enteredNumber < 1 || +enteredNumber > 6) {
      return 
    }
    props.onAddResults(enteredNumber);
    setEnteredNumber('')
  }

  function numberChangeHandler (event) {
    setEnteredNumber(event.target.value)
  } 

  return (
  <form onSubmit={addNumberHandler}>
    <label htmlFor="enteredNumber">Please add your number from 1 to 6</label>
    <input id="enteredNumber" type="number" value={enteredNumber} onChange={numberChangeHandler}/>
    <Button type="submit"></Button>
  </form>
  )
};

export default AddResults;
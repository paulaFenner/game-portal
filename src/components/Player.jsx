import { useState, useRef } from 'react';

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  // since we're using refs now, we don't have to update the state on each change
  // const [submitted, setSubmitted] = useState(false);

  //   function handleChange(e) {
  //     setEnteredPlayerName(e.target.value);
  //   }

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = ''; /* clears the input field 
    - not optimal when using React as directly changing the DOM */
  }

  return (
    <section id='player'>
      <h2>
        Welcome {enteredPlayerName ? enteredPlayerName : 'unknown entity'}
      </h2>
      <p>
        <input
          ref={playerName}
          type='text'
          // the input now is linked to the ref, so we don't need the value anymore
          // onChange={handleChange}
          //   value={enteredPlayerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

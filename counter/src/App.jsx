import { useState } from "react";
import "./App.css";

function App() {
  // Use state hook is used for update the counter variable in UI. It is handled by using the React only. In the below code the counter is the variable and set counter is the method which was getting in use to update that specific variable. the value 15 in the useState() is the default value for the counter variable.

  const [counter, setCounter] = useState(15);
  // This  addValue() function is used for the increasing the value of counter variable. Or we can say to update the state of the counter variable.
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  // Similarly removeValue() function is used to reduce the value of the counter variable.
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    // This below line is used for the colletively pass return the all values. Because the return function only return the single value. So to manupulate that thing we are using the empty tag which having the maultiple children tags in it.
    <>
      <h1>Hello Meeni</h1>

      <h2>Counter value: {counter} </h2>

      <button onClick={addValue}>Add Value</button>

      <br />

      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}
// This line is used to export the "App" component to use anywhere in the project. Here we are using it in the main.jsx file

export default App; 

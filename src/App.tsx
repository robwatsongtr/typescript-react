import React, { useState } from 'react';
import './App.css';

// interface is a duck or strturctural contract for the shape of an 
// object as a type. The array brackets at the end of the object 
// definte this interface as an array of objects. 
interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  const [ people, setPeople] = useState<IState["people"]>([])

  return (
    <div className="App">
      <h1>People Invited to My Party</h1>
    </div>
  );
}

export default App;

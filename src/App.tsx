import React, { useState } from 'react';
import './App.css';
import { List } from "./components/List"
import { AddToList } from './components/AddToList';

// Tutorial from video: https://www.youtube.com/watch?v=jrKcJxF0lAU

// interface is a 'duck' or strturctural contract for the shape of an 
// object as a type. The array brackets at the end of the object 
// definte this interface as an array of objects. 
//
// export interface to use for props in child components 
export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  const [ people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      age: 38,
      note: "Sort of the GOAT"
    }
  ])

  return (
    <div className="App">
      <h1>People Invited to My Party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;

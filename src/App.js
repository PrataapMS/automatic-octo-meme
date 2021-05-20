import logo from './logo.svg';
import React from 'react';
import { Greeting } from './Greeting'
import { PeopleList } from './PeopleList'
import './App.css';

const people = [
  {
    name: 'John',
    age:30,
    hairColor:'brown',

  },{
    name: 'Helga',
    age:45,
    hairColor:'black',

  },{
    name: 'Dwayne',
    age:34,
    hairColor:'blonde',

  },
];

function App() {
  let url = "https://reactjs.org";

  const displayAlert = () => {
    alert('Hello');
  };

  return (
    <div className="App">
      <header className="App-header">

        <p style={{color: 'red', fontSize: 70}}>Big Red Text!</p>

        <Greeting person={{name:"Prataap MS", numberOfMessages:5}} name="Prataap" numberOfMessages={100} />
        <PeopleList people={people}/>
        
        <button onClick={displayAlert}>Click Me!</button>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is so cool!
        </p>
        <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

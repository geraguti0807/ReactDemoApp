import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Gera', age: '21'},
      { name: 'Casa', age: '22'},
      { name: 'Lucy', age: '21'}
    ]
  });

  const [ otherState, setOtherState ] = useState('some other value');

  const switchNameHandler = () => {
    //console.log('This work');
    // DON'T DO THIS this.state.persons[0].name = 'Gerardo';
    setPersonsState({
      persons: [
        { name: 'Gerardo', age: '21'},
        { name: 'Casa', age: '22'},
        { name: 'Lucy', age: '20'}
      ]
    });
  };  

  return (
    <div className="App">
      <h1>Hi I'm a React App</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person 
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}>
          My hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age}
      />
    </div>
  );
  //return React.createElement('div', null, React.createElement( 'h1', {className: 'App'}, 'Hi I\'m a React App!!!'));
}

export default app;

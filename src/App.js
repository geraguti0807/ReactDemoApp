import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Gera', age: '21'},
      { name: 'Casa', age: '22'},
      { name: 'Lucy', age: '21'}
    ],
    otherState: 'some toher value'
  }

  switchNameHandler = () => {
    //console.log('This work');
    // DON'T DO THIS this.state.persons[0].name = 'Gerardo';
    this.setState({
      persons: [
        { name: 'Gerardo', age: '21'},
        { name: 'Casa', age: '22'},
        { name: 'Lucy', age: '20'}
      ]
    })
  };

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}>
            My hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
        />
      </div>
    );
    //return React.createElement('div', null, React.createElement( 'h1', {className: 'App'}, 'Hi I\'m a React App!!!'));
  }
}

export default App;

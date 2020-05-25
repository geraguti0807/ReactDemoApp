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

  switchNameHandler = newName => {
    //console.log('This work');
    // DON'T DO THIS this.state.persons[0].name = 'Gerardo';
    this.setState({
      persons: [
        { name: newName, age: '21'},
        { name: 'Casa', age: '22'},
        { name: 'Lucy', age: '20'}
      ]
    })
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: 'Gerardo', age: '21'},
        { name: event.target.value, age: '22'},
        { name: 'Lucy', age: '20'}
      ]
    })
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '3px solid red',
      padding: '6px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>This is really working</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Gerardo')}>
            Switch Name
        </button>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Jason Gerardo')}
          change={this.nameChangeHandler}>
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

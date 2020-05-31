import React, { Component } from 'react';
import Person from './Person/Person';
import classes from './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 'dfs' , name: 'Casa', age: '22'},
      { id: 'ers' , name: 'Lucy', age: '21'},
      { id: 'hfs' , name: 'Gera', age: '21'}
    ],
    otherState: 'some toher value',
    showPerson: false
  }

  deletePersonHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person

    this.setState({persons: persons});
  };

  toggleNameHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  render() {
    let persons = null;
    let btnClass = '';

    if ( this.state.showPerson ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              change={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      );

      btnClass = classes.green;
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bond);
    }

    return (
      <div className={classes.App}>
        <h1>Hi I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button className={btnClass} onClick={this.toggleNameHandler}>
            Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

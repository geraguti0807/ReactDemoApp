import React, { Component } from 'react';
import Persons from '../components/ListPerson/ListPerson';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 'dfs' , name: 'Casa', age: '22'},
      { id: 'ers' , name: 'Lucy', age: '21'},
      { id: 'hfs' , name: 'Gera', age: '21'}
    ],
    otherState: 'some toher value',
    showPersons: false
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
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          showPersons={this.state.showPersons} 
          persons={this.state.persons}
          clicked={this.toggleNameHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;

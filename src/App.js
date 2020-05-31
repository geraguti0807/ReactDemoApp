import React, { Component } from 'react';
import Person from './Person/Person';
import styled from 'styled-components';
import './App.css';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'green' : 'red'};
  color: white;
  font: inherit;
  border: 1px solid black;
  padding: 6px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.alt ? 'lightgreen' : 'salmon'};
    color: black;
  }
`;

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
    const style = {
      backgroundColor: 'red',
      color: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '6px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'salmon',
        color: 'black'
      }
    };

    let persons = null;

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

      /*
      style.backgroundColor = 'green';
      style[':hover'] = {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
      */
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <StyledButton alt={this.state.showPerson} onClick={this.toggleNameHandler}>
            Toggle Persons
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;

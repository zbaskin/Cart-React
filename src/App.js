import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      {id: 1, value: 0},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0}
    ],
    maxID: 5,
    sum: 0
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counters[index]};
    counters[index].value++;

    const sum = this.state.sum;
    this.setState({
      counters: counters,
      sum: sum + 1
    });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counters[index]};
    counters[index].value--;

    const sum = this.state.sum;
    this.setState({
      counters: counters,
      sum: sum - 1
    });
  };

  handleCancel = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counters[index]};
    const value = counters[index].value
    counters[index].value = 0;

    const sum = this.state.sum;
    this.setState({
      counters: counters,
      sum: sum - value
    });
  };

  handleAdd = () => {
    const counters = [...this.state.counters];
    const maxID = this.state.maxID;
    const newCounter = {id: maxID, value: 0};
    counters.push(newCounter);

    console.log(maxID);
    this.setState({
      counters: counters,
      maxID: maxID + 1
    });
  };

  handleDelete = counterID => {
    const counter = this.state.counters.filter(c => c.id === counterID);
    const value = counter[0].value;
    const counters = this.state.counters.filter(c => c.id !== counterID);

    const sum = this.state.sum;
    this.setState({
      counters: counters,
      sum: sum - value
    });
  };

  render() {
    return (
      <div>
        <NavBar
          totalCounters = { this.state.sum }
        />
        <main className = "container">
          <Counters
            counters = {this.state.counters}
            onAdd = {this.handleAdd}
            onIncrement = {this.handleIncrement}
            onDecrement = {this.handleDecrement}
            onCancel = {this.handleCancel}
            onDelete = {this.handleDelete}
          />
        </main>
      </div>
    );
  }
}

export default App;

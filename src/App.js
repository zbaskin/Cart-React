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
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counters[index]};
    counters[index].value++;
    this.setState({counters});
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counters[index]};
    counters[index].value--;
    this.setState({counters});
  };

  handleCancel = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counters[index]};
    counters[index].value = 0;
    this.setState({counters});
  };

  handleAdd = () => {
    const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
        });
    this.setState({ counters });
  };

  handleDelete = counterID => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({counters});
  };

  render() {
    return (
      <div>
        <NavBar
          totalCounters = {this.state.counters.filter(c => c.value > 0).length}
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

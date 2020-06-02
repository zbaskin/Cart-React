import React, {Component} from 'react';
import './App.css';

import NavBar from "./components/navbar";
import Counters from "./components/counters";
import Cart from "./components/cart";

import { Modal, Button, Row, Col } from 'antd';

class App extends Component {
  state = {
    counters: [
      {id: 1, value: 0, name: "Action Comics #999"},
      {id: 2, value: 0, name: "Amazing Spider-Man #15"},
      {id: 3, value: 0, name: "The Mighty Thor #10"},
      {id: 4, value: 0, name: "Immortal Hulk #3"}
    ],
    maxID: 5,
    sum: 0,
    visible: false,
    visibleCart: false,
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
    this.showModal();
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

  handleCart = () => {
    this.setState({
      visibleCart: true,
    });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    const counters = [...this.state.counters];
    const maxID = this.state.maxID;
    const name = this.testInput.value;
    const newCounter = {id: maxID, value: 0, name: name};
    counters.push(newCounter);

    this.setState({
      counters: counters,
      maxID: maxID + 1,
      visible: false,
    }, function() {
      document.getElementById('nameInput').value = "";
    });
  }

  handleModalCancel = () => {
    document.getElementById('nameInput').value = "";
    this.setState({
      visible: false,
    });
  };

  handleCartCancel = () => {
    this.setState({
      visibleCart: false,
    });
  };

  render() {
    return (
      <div>
        <NavBar
          totalCounters = { this.state.sum }
          onAdd = {this.handleAdd}
          onCart = {this.handleCart}
        />
        <main className = "container">
          <div style={{ marginTop: 50 }}>
            <Counters
              counters = {this.state.counters}
              onIncrement = {this.handleIncrement}
              onDecrement = {this.handleDecrement}
              onCancel = {this.handleCancel}
              onDelete = {this.handleDelete}
            />
          </div>
        </main>
        <Modal
          align="middle"
          title="Excelsius Comic Shop"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleModalCancel}
        >
          <p>Input the comic you would like to add to your collection.</p>
          <input type='text' id="nameInput"
            ref={(input) => { this.testInput = input; }}
          ></input>
        </Modal>
        <Modal
          align="middle"
          title="Excelsius Comic Shop"
          visible={this.state.visibleCart}
          footer={null}
          onCancel={this.handleCartCancel}
        >
          <Cart
            counters = {this.state.counters}
            totalSum = {this.state.sum}
          />
        </Modal>
      </div>
    );
  }
}

export default App;

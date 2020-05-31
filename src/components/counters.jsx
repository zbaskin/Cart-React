import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onIncrement,
      onDelete,
      onDecrement,
      onCancel,
      counters
    } = this.props;
    return (
      <div>
        <button
          className="btn btn-success m-2"
          onClick={() => this.props.onAdd(this.props.counter)}
        >
          <i className="fa fa-plus-circle" aria-hidden="true" />
        </button>

        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onCancel={onCancel}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

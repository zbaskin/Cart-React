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

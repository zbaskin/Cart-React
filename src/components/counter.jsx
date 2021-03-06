import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <span className="navbar-brand text-wrap">{this.props.counter.name}</span>
          </div>
          <div className="col-md-1">

            <span style={{ fontSize: 24 }} className={this.getBadgeClasses()}>
              {this.props.counter.value}
            </span>
          </div>
          <div className="col-md-4">
            <button
              className="btn btn-primary"
              onClick={() => this.props.onIncrement(this.props.counter)}
            >
              <i className="fa fa-plus-circle" aria-hidden="true" />
            </button>
            <button
              className="btn btn-secondary m-2"
              onClick={() => this.props.onDecrement(this.props.counter)}
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              <i className="fa fa-minus-circle" aria-hidden="true" />
            </button>
            <button
              className="btn btn-info mr-2"
              onClick={() => this.props.onCancel(this.props.counter)}
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              <i className="fa fa-refresh" aria-hidden="true" />
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.props.onDelete(this.props.counter.id)}
            >
              <i className="fa fa-trash-o" aria-hidden="true" />
            </button>
          </div>
          <div className="col-md-3" />
        </div>
      </div>
    );
  }

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "dark" : "warning";
    return classes;
  };
}

export default Counter;

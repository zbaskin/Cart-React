import React, { Component } from "react";

class NavBar extends Component {
  render() {
    const {
      totalCounters,
      onAdd,
      onCart
    } = this.props;
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="navbar-brand"> Excelsius Comic Shop </div>
        <div className="navbar-brand" style={{ marginLeft: "auto"  }}>

          <button
            className="btn btn-success m-2"
            onClick={() => this.props.onAdd(this.props.counter)}
          >
            <i className="fa fa-plus-square" aria-hidden="true" />
          </button>

          <button
            className="btn btn-dark m-2"
            onClick={() => this.props.onCart()}
          >
            <i className="fa fa-shopping-cart fa-lg" aria-hidden="true" />
          </button>

          <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}>
            {totalCounters}
          </span>

          Items

        </div>
      </nav>
    );
  }
}

export default NavBar;

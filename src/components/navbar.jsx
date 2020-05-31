import React, { Component } from "react";

class NavBar extends Component {
  render() {
    const {
      totalCounters,
      onAdd
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

          <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
          <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}>
            {totalCounters}
          </span>

          Items

        </div>
      </nav>
    );
  }
}
/*
const NavBar ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">

      Excelsius Comic Shop

      <div className="navbar-brand" style={{ marginLeft: "auto"  }}>

        <button
          className="btn btn-success m-2"
          onClick={() => this.props.onAdd(this.props.counter)}
        >
          <i className="fa fa-plus-square" aria-hidden="true" />
        </button>

        <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
        <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}>
          {totalCounters}
        </span>

        Items

      </div>
    </nav>
  );
};
*/
export default NavBar;

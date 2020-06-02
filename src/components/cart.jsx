import React, { Component } from "react";
import { Row, Col } from 'antd';

class Cart extends Component {
  render() {
    const {
      counters
    } = this.props;
    return (
      <div>
        <p>Your collection:</p>
        {this.props.counters.map((counter, id) => {
          return (
            <Row key={id}>
              <Col md={16}>
                {counter.name}
              </Col>
              <Col md={8}>
                {counter.value} Items
              </Col>
            </Row>
          )
        })}
      </div>
    );
  }
}

export default Cart;

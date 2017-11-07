import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button type="button" className="btn btn-outline-success">{this.props.btnName}</button>
    );
  }
}

export default Button;

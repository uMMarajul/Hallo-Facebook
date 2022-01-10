import React from "react";

class Like extends React.Component {
  state = {
    like: false,
  };
  handleLike = () => this.setState({ like: !this.state.like });
  render() {
    return (
      <button
        onClick={this.handleLike}
        className={"btn " + (this.state.like ? "btn-danger" : "btn-primary")}
      >
        <i className="fa fa-thumbs-up"></i>
      </button>
    );
  }
}

export default Like;

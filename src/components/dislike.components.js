import React from "react";

class Dislike extends React.Component {
  state = {
    like: false,
  };
  handleLike = () => {
    this.setState({ like: !this.state.like });
    this.props.handledislike();
  };
  render() {
    return (
      <button
        onClick={this.handleLike}
        className={"btn " + (this.state.like ? "btn-danger" : "btn-primary")}
      >
        <i className="fa fa-thumbs-down"></i>
      </button>
    );
  }
}

export default Dislike;

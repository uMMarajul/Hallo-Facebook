import React from "react";

class Like extends React.Component {
  state = {
    like: this.props.islike,
  };
  handleLike = () => {
    this.setState({ like: !this.state.like });
    // console.log(this.props.handlelike);
    this.props.handlelike();
  };
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

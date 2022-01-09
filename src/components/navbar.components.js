import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light nav-box">
        <div className="navbar-brand mx-3">
          <span className="badge bg-primary">Hello facebook</span>
        </div>
        <p className="m-2">
          Like: <span className="badge bg-primary">{this.props.like}</span>{" "}
          Dislike:<span className="badge bg-primary">{this.props.dislike}</span>{" "}
        </p>
      </nav>
    );
  }
}

export default Navbar;

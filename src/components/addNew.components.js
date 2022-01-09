import React from "react";

class AddNewPost extends React.Component {
  handleClick = () => {
    console.log("Add New POst Clicked");
  };
  render() {
    return (
      <div className="card W-75 m-1 card-box" style={{ maxWidth: "650px" }}>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <input placeholder="Add New Post"></input>
            </div>
            <div className="col">
              <button className="btn btn-primary" onClick={this.handleClick}>
                Add New Post
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNewPost;

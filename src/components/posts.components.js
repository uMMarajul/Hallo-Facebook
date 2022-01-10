import React from "react";
import Like from "./like.components";
class Posts extends React.Component {
  render() {
    return (
      <div className="card W-75 m-1 card-box" style={{ maxWidth: "800px" }}>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p>{this.props.date}</p>
          <hr />
          <p className="card-text">{this.props.description}</p>
          <hr />
          <div className="row">
            <div className="col-10">
              <input
                type="text"
                className="form-control"
                placeholder="Comment"
              ></input>
            </div>
            <div className="col-2">
              <Like />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;

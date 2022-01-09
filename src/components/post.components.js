import React from "react";
import Dislike from "./dislike.components";
import Like from "./like.components";
import imgae from "../Assets/ab.jpg.jpg";
class Posts extends React.Component {
  handleremove = () => {
    console.log("Remove button clicked");
    this.props.handleremove(this.props.id);
  };

  render() {
    const { handlelike, handledislike } = this.props;

    return (
      <div className="card W-75 m-1 card-box" style={{ maxWidth: "650px" }}>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p>{this.props.date}</p>
          <hr />
          <img src={imgae} alt="img" height="250px" width="100%"></img>
          <p className="card-text">{this.props.description}</p>
          <hr />
          <div className="row">
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                placeholder="Comment"
              ></input>
            </div>
            <div className="col-2">
              <Like handlelike={handlelike} islike={this.props.islike} />
            </div>
            <div className="col-2">
              <Dislike
                handledislike={handledislike}
                islike={this.props.islike}
              />
            </div>
          </div>
          <div className="row p-2">
            <button onClick={this.handleremove} className="btn btn-danger">
              Remove
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;

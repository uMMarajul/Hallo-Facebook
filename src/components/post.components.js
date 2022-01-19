import Dislike from "./dislike.components";
import Like from "./like.components";
import imgae from "../Assets/ab.jpg.jpg";

const Posts = (props) => {
  const {
    title,
    date,
    handleremove: callremove,
    description,
    handlelike,
    islike,
    id,
  } = props;

  const handleremove = () => {
    console.log("Remove button clicked");
    callremove(id);
  };

  return (
    <div className="card W-75 m-1 card-box" style={{ maxWidth: "650px" }}>
      <div className="card-body">
        <div className="row">
          <div className="col-10">
            <h5 className="card-title">{title}</h5>
          </div>
          <div className="col-2">
            <button onClick={handleremove} className="btn btn-danger">
              <i className="bi bi-trash-fill"></i>
            </button>
          </div>
        </div>

        <p>{date}</p>

        <hr />
        <img src={imgae} alt="img" height="250px" width="100%"></img>

        <p className="card-text">{description}</p>
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
            <Like handlelike={handlelike} islike={islike} id={id} />
          </div>
          <div className="col-2">
            <Dislike handledislike={handlelike} islike={islike} id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;

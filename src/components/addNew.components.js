const AddNewPost = () => {
  const handleClick = () => {
    console.log("Add New POst Clicked");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <div className="card W-75 m-1 card-box" style={{ maxWidth: "650px" }}>
      <div className="card-body">
        <div className="row">
          <div className="col">
            <button className="btn btn-primary" onClick={handleClick}>
              Add New Post
            </button>
          </div>
        </div>
        <div className="row m-2">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="title"
              className="m-2"
            ></input>
            <input type="datetime-local" className="m-2" name="date" />
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="post"
              name="post_body"
            ></textarea>
            <input type="submit" className="btn btn-primary"></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewPost;

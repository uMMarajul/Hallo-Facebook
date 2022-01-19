import { useState } from "react";

const AddNewPost = (props) => {
  const [classstyle, setclassstyle] = useState("none");
  const [form, setform] = useState({ title: "", post_body: "" });

  const { handleCreatNewPost } = props;

  const handleOpenModal = () => {
    setclassstyle("block");
  };

  const handleCloseModal = () => {
    setclassstyle("none");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.name);
    if (event.target.name === "submit") {
      handleCreatNewPost(form.title, form.post_body);
      setform({ title: "", post_body: "" });
      alert("POst Added");
    }

    // console.log(event);
  };

  const handleChange = (event) => {
    const fileName = event.target.name;
    const fileValue = event.target.value;
    setform((value) => ({ ...value, [fileName]: fileValue }));
  };

  return (
    <div className="card W-75 m-1 card-box" style={{ maxWidth: "650px" }}>
      <div className="card-body">
        <div className="row">
          <button className="btn btn-primary" onClick={handleOpenModal}>
            Add New Post
          </button>
        </div>

        <div className="row mx-2" style={{ display: classstyle }}>
          <form name="submit" onSubmit={handleSubmit}>
            <div className="col my-1">
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                name="title"
                value={form.title}
                onChange={handleChange}
              ></input>
            </div>
            <div className="col my-1">
              <textarea
                className="form-control"
                rows="3"
                placeholder="post"
                name="post_body"
                value={form.post_body}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="row">
              <div className="col">
                <input
                  type="submit"
                  name="submit"
                  className="btn btn-primary"
                ></input>
              </div>

              <div className="col">
                <button
                  name="ko"
                  onClick={handleCloseModal}
                  className="btn btn-danger"
                >
                  Close
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewPost;

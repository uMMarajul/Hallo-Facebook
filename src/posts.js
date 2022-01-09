import React from "react";
import Post from "./components/post.components";
import data from "./data.json";
class Posts extends React.Component {
  state = {
    Posts: data,
  };
  handleremove = (id) => {
    console.log("OK");
    const data = [...this.state.Posts];
    const newdata = data.filter((data) => data.id !== id);
    // console.log(newdata);

    this.setState({ Posts: newdata });
    // console.log(this.state.Posts);
  };
  render() {
    const { handlelike, handledislike } = this.props;
    return (
      <>
        <div className="container mainContent">
          {this.state.Posts.map((value) => {
            return (
              <Post
                islike={value.islike}
                title={value.title}
                date={value.date}
                description={value.description}
                key={value.id}
                id={value.id}
                handlelike={handlelike}
                handledislike={handledislike}
                handleremove={this.handleremove}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Posts;

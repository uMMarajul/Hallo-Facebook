import React from "react";
import Post from "./components/post.components";
class Posts extends React.Component {
  render() {
    const { handlelike, Posts, handleremove } = this.props;
    return (
      <>
        <div className="container mainContent">
          {Posts.map((value) => {
            return (
              <Post
                islike={value.islike}
                title={value.title}
                date={value.date}
                description={value.description}
                key={value.id}
                id={value.id}
                handlelike={handlelike}
                handleremove={handleremove}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Posts;

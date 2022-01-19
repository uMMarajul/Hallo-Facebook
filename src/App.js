import React from "react";
import "./App.css";
import Posts from "./posts";
import Navbar from "./components/navbar.components";
import AddNewPost from "./components/addNew.components";

import "bootstrap-icons/font/bootstrap-icons.css";
import Postdata from "./data.json";
class App extends React.Component {
  state = {
    like: 0,
    dislike: 0,
    posts: Postdata,
  };

  handleLike = (id, action) => {
    const prePosts = [...this.state.posts];

    prePosts.forEach((item) => {
      if (item.id === id) {
        item.islike = action;
      }
    });

    this.setState({ posts: prePosts });
  };

  countLikeDislike = () => {
    const prePosts = [...this.state.posts];
    let like = 0;
    let dislike = 0;
    for (const item of prePosts) {
      if (item.islike === 1) like += 1;
      if (item.islike === 2) dislike += 1;
    }
    return [like, dislike];
  };

  handleremove = (id) => {
    console.log("OK");
    const data = [...this.state.posts];
    const newdata = data.filter((data) => data.id !== id);
    // console.log(newdata);

    this.setState({ posts: newdata });
    // console.log(this.state.Posts);
  };

  render() {
    const { like, dislike } = this.state;
    return (
      <>
        <Navbar
          like={like}
          dislike={dislike}
          countLikeDislike={this.countLikeDislike}
        />
        <div className="container mainContent">
          {/* <AddNewPost /> */}
          <Posts
            handlelike={this.handleLike}
            Posts={this.state.posts}
            handleremove={this.handleremove}
          />
        </div>
      </>
    );
  }
}

export default App;

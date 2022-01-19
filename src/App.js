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
    this.setState({ posts: newdata });
  };

  handleCreatNewPost = (title, post) => {
    const prePost = [...this.state.posts];
    const last_id = prePost[prePost.length - 1].id;
    const time = "1 January 2022 | 10:10PM";
    prePost.push({
      id: last_id + 1,
      title: title,
      date: time,
      description: post,
      image: "./Assets/",
      islike: 0,
    });
    console.log(prePost);
    this.setState({ posts: prePost });
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
          <AddNewPost handleCreatNewPost={this.handleCreatNewPost} />
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

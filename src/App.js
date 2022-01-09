import React from "react";
import "./App.css";
import Posts from "./posts";
import Navbar from "./components/navbar.components";
import AddNewPost from "./components/addNew.components";
class App extends React.Component {
  state = {
    like: 0,
    dislike: 0,
  };
  handleLike = () => {
    this.setState({ like: this.state.like + 1 });
  };
  handledislike = () => {
    this.setState({ dislike: this.state.dislike + 1 });
  };

  render() {
    const { like, dislike } = this.state;
    return (
      <>
        <Navbar like={like} dislike={dislike} />
        <div className="container mainContent">
          <AddNewPost />
          <Posts
            handlelike={this.handleLike}
            handledislike={this.handledislike}
          />
        </div>
      </>
    );
  }
}

export default App;

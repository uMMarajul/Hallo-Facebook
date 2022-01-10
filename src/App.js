import React from "react";
import "./App.css";
import Posts from "./components/posts.components";
import data from "./data.json";
import Navbar from "./components/navbar.components";
class App extends React.Component {
  state = {
    Posts: data,
  };
  render() {
    return (
      <>
        <Navbar />
        <div className="container mainContent">
          {this.state.Posts.map((value) => {
            return (
              <Posts
                title={value.title}
                date={value.date}
                description={value.description}
                key={value.id}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default App;

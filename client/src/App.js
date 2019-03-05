import React, { Component } from "react";
import Post from "./Components/Post";
import axios from "axios";

class App extends Component {
  state = {
    data: null,
    userIP: null
  };

  componentDidMount() {
    axios.get("/getData").then(res => {
      this.setState({ data: res.data });
    });
  }

  render() {
    return (
      <div className="App">
        <Post />
      </div>
    );
  }
}

export default App;

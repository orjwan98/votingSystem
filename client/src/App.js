import React, { Component } from "react";
import PostContainer from "./Components/PostContainer";
import axios from "axios";

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    axios.get("/getData").then(res => {
      this.setState({ data: res.data });
    });
  }

  render() {
    return (
      <div className="App">
        <PostContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;

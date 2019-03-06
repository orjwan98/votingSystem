import React, { Component } from "react";
import PostContainer from "./Components/PostContainer";
import axios from "axios";
import Name from "./Components/Name";
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
        <Name />
        <PostContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Post from "../Post/index.js";

class PostContainer extends Component {
  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
        {data
          ? data.map(element => (
              <Post
                key={element.id}
                title={element.title}
                post={element.post}
                upvotes={element.upvotes}
                downvotes={element.downvotes}
              />
            ))
          : "Loading..."}
      </React.Fragment>
    );
  }
}

export default PostContainer;

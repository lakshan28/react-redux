import React, { Component } from "react";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => this.setState({ posts: data }));
  }

  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h1>{post.id}</h1>
        <h3>{post.title}</h3>
        <p>{post.body} </p>
      </div>
    ));
    return (
      <div>
        <h1>Post</h1>
        {postItems}
      </div>
    );
  }
}

export default Posts;

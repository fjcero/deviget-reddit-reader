import React, { Component } from 'react';
import Content from '../components/Content';
import PostPreview from '../components/PostPreview';
import PostsListItem from '../components/PostsListItem';
import PostsListSidebar from './PostsListSidebar';
import Sidebar from '../components/Sidebar';

class App extends Component {
  constructor () {
    super();
    this.state = {
      currentPost: null,
      posts: [],
    }
    this.setCurrentPost = this.setCurrentPost.bind(this);
  }

  componentDidMount () {
    fetch('https://www.reddit.com/top.json')
    .then(res => {
      return res.json();
    }).then(res => {
      let posts = res.data.children.map((item) => {
        return (
          <PostsListItem key={item.data.id} data={item.data} />
        )
      })
      this.setState({posts})
    })
  }

  setCurrentPost (post, e) {
    this.setState({
      currentPost: post.props.data
    });
  }

  render() {
    return (
      <div className="App">
        <Sidebar>
          <PostsListSidebar
            posts={this.state.posts}
            onPreview={this.setCurrentPost}
          />
        </Sidebar>
        <Content>
          <PostPreview post={this.state.currentPost} />
        </Content>
      </div>
    );
  }
}

export default App;

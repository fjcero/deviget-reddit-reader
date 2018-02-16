import React, { Component } from 'react';
import Content from '../components/Content';
import PostPreview from '../components/PostPreview';
import PostsListItem from '../components/PostsListItem';
import PostsListSidebar from './PostsListSidebar';
import Sidebar from '../components/Sidebar';

function removeObjectsFromCollection (collection, collectionToRemove) {
  const keysToRemove = collectionToRemove.reduce((keys, obj) => {
    return keys.concat(obj.props.data.id)
  }, []);

  const result = collection.reduce((col, obj) => {
    return keysToRemove.indexOf(obj.props.data.id) < 0
      ? col.concat(obj)
      : col;
  }, []);

  return result.filter(r => r);
}

class App extends Component {
  constructor () {
    super();
    this.state = {
      currentPost: null,
      posts: [],
    }
    this.openPostPreview = this.openPostPreview.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
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

  openPostPreview (post, e) {
    this.markAsRead([post]);
    this.setState({
      currentPost: post.props.data
    });
  }

  markAsRead (posts, e) {
    const unreadPosts = removeObjectsFromCollection(this.state.posts, posts)
    this.setState({
      posts: unreadPosts
    });
  }

  render() {
    return (
      <div className="App">
        <Sidebar>
          <PostsListSidebar
            posts={this.state.posts}
            onPreview={this.openPostPreview}
            markAsRead={this.markAsRead}
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

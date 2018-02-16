import React, { Component } from 'react';
import SidebarList from '../components/SidebarList';
import './PostsListSidebar.css';

class PostsListSidebar extends Component {
  render () {
    const posts = this.props.posts;
    return (
      <div>
        <h2>Reddit Posts</h2>
        <SidebarList items={posts} openItem={this.props.onPreview} />
        <button className="dismiss__all" onClick={(e) => this.props.markAsRead(posts, e)}>dismiss all</button>
      </div>
    )
  }
}

export default PostsListSidebar;

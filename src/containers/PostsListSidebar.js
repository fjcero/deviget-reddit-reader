import React, { Component } from 'react';
import SidebarList from '../components/SidebarList';
import './PostsListSidebar.css';

class PostsListSidebar extends Component {
  render () {
    return (
      <div>
        <h2>Reddit Posts</h2>
        <SidebarList items={this.props.posts} openItem={this.props.onPreview} />
        <button className="dismiss__all">dismiss all</button>
      </div>
    )
  }
}

export default PostsListSidebar;

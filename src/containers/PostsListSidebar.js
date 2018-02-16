import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import SidebarList from '../components/SidebarList';
import './PostsListSidebar.css';

class PostsListSidebar extends Component {
  render () {
    return (
      <Sidebar>
        <h2>Reddit Posts</h2>
        <SidebarList items={this.props.posts} />
        <button className="dismiss__all">dismiss all</button>
      </Sidebar>
    )
  }
}

export default PostsListSidebar;

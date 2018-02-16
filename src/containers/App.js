import React, { Component } from 'react';
import Content from '../components/Content';
import Sidebar from '../components/Sidebar';
import SidebarList from '../components/SidebarList';
import PostsListItem from '../components/PostsListItem';

class App extends Component {

  constructor () {
    super();

    this.state = {
      posts: [],
    }
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

  render() {
    return (
      <div className="App">
        <Sidebar>
          <h2>Reddit Posts</h2>
          <SidebarList items={this.state.posts} />
        </Sidebar>
        <Content>
          Here is were the Post Preview will be shown.
        </Content>
      </div>
    );
  }
}

export default App;

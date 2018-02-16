import React, { Component } from 'react';
import './App.css';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';

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
          <div key={item.data.id}>
            {item.data.title}
            {item.data.author}
            {item.data.created}
            {item.data.created_utc}
            {item.data.thumbnail}
            {item.data.thumbnail !== '' && item.data.preview && item.data.preview[0]}
            {item.data.visited}
            {item.data.permalink}
            {item.data.url}
            {item.data.subreddit_name_prefixed}
            {item.data.num_comments}
          </div>
        )
      })
      this.setState({posts})
    })
  }

  render() {
    return (
      <div className="App">
        <Sidebar>
          <div className="list">
            {this.state.posts}
          </div>
        </Sidebar>
        <Content>
          Here is were the Post Preview will be shown.
        </Content>
      </div>
    );
  }
}

export default App;

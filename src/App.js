import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
            {item.data.preview}
            {item.data.thumbnail}
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
        <div className="list">
          {this.state.posts}
        </div>
      </div>
    );
  }
}

export default App;

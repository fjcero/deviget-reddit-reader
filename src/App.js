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
            {item.data.author}
            {item.data.url}
            {item.data.title}
            {item.data.subreddit_name_prefixed}
            {item.data.num_comments}
            {item.data.permalink}
          </div>
        )
      })
      this.setState({posts})
      console.log({posts})
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="list">
          {this.state.posts}
        </div>
      </div>
    );
  }
}

export default App;

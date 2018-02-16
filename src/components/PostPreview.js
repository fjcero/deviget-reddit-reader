import React, { Component } from 'react';
import 'PostPreview.css';

const PostPreview = ({post}) => {
  return (
    <div className="post--preview">
      <h2 className="post--title">{post.title}</h2>
      <span className="post--image">{post.thumbnail}</span>
      <div className="post--description">{post.description}</div>
    </div>
  )
}

export default PostPreview;

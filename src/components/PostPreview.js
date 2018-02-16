import React from 'react';
import './PostPreview.css';

// {post.id}
// {post.title}
// {post.author}
// {post.created}
// {post.created_utc}
// {post.thumbnail}
// {post.thumbnail !== '' && post.preview && post.preview[0]}
// {post.visited}
// {post.permalink}
// {post.url}
// {post.subreddit_name_prefixed}
// {post.num_comments}
const PostPreview = ({post}) => {

  console.log(post);

  const blankSlate = <div> Select one post in the sidebar</div>;

  return (
    <div className="post--preview">
      {post === null
        ? blankSlate
        : (
          <div>
            <h2 className="post--title">{post.title}</h2>
            <span className="post--image">{post.thumbnail}</span>
            <div className="post--description">{post.description}</div>
          </div>
        )
      }
    </div>
  )
}

export default PostPreview;

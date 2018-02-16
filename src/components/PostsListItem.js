import React from 'react';
import './PostsListItem.css';

const PostsListItem = ({data}) => {
  return (
    <div className="posts__list__item">
      {data.id}
      {data.title}
      {data.author}
      {data.created}
      {data.created_utc}
      {data.thumbnail}
      {data.thumbnail !== '' && data.preview && data.preview[0]}
      {data.visited}
      {data.permalink}
      {data.url}
      {data.subreddit_name_prefixed}
      {data.num_comments}
    </div>
  )
};

export default PostsListItem;

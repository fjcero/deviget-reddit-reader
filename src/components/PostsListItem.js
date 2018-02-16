import React from 'react';
import './PostsListItem.css';
import moment from 'moment';

// {data.id}
// {data.title}
// {data.author}
// {data.created}
// {data.created_utc}
// {data.thumbnail}
// {data.thumbnail !== '' && data.preview && data.preview[0]}
// {data.visited}
// {data.permalink}
// {data.url}
// {data.subreddit_name_prefixed}
// {data.num_comments}
const PostsListItem = ({data}) => {
  const haveValidThumbnail = /^http/gi.exec(data.thumbnail)
  const Thumbnail = haveValidThumbnail && haveValidThumbnail.length > 0
    ? <img className="post__thumbnail" src={data.thumbnail} alt={data.title} />
    : <span className="post__thumbnail post__thumbnail--empty">No Picture</span>;

  const title = data.title.substring(0, 120);

  const created = moment.unix(data.created).fromNow();

  return (
    <div className="posts__list__item">
      <div className="item__header">
        <div>
          <span className="post__status post__status--unread">
            <i className="status__icon"/>
          </span>
          <span className="post__author">{data.author}</span>
        </div>
        <span className="post__created">{created}</span>
      </div>
      <div className="item__content">
        {Thumbnail}
        <span className="post__title">{title}</span>
        <span className="post__more"></span>
      </div>
      <div className="item__footer">
        <span className="post__dismiss"><i className="dismiss__icon"/>Dismiss Post</span>
        <span className="post__comments">{data.num_comments || 'No'} comments</span>
      </div>
    </div>
  )
};

export default PostsListItem;

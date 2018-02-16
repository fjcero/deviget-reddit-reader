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

  const blankSlate = (
    <div className="post--preview--empty">
      <div>← Select one post in the sidebar</div>
    </div>
  );

  const renderImage = (post) => {
    if (!post) return null;

    let url = post.url || null

    const isGifv = /gifv$/gi
    if (isGifv.exec(url)) {
      url = post.url.replace(isGifv, 'gif')
    }

    return <img src={url} alt={post.title} />
  }


  return post === null
    ? blankSlate
    : (
      <div className="post--preview">
        <h2 className="post--title">{post.title}</h2>
        <div className="post--image">{renderImage(post)}</div>
        <div className="post--description">{post.description}</div>
      </div>
    )
}

export default PostPreview;

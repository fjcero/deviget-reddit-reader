# Dev I Get - Front-end Challange - Reddit Reader

## How I Started

This project is bootstraped using `create-react-app` [1] which is the official tool from facebook to fast boilerplate react applications.

```bash
$ npx create-react-app deviget-reddit-reader
$ nvm use stable
$ echo $(nvm current) > .nvmrc
$ vim .editorconfig
$ yarn start
```

## Strategy

Will use `top-down` strategy to start creating components and logic. This will reduce the amount of opinionated code and will allow to extend the application in the next steps.

First step is to connect to Reddit and get some information from the list of posts. To accomplish that will fetch data from Root component, `App` in this case.

The URL to get this posts is `https://www.reddit.com/top.json`. I use Postman [2] to navigate requests and document APIs endpoints. 

Now will get the specific fields to show in the list and the post detail. The required fields to show will be:

> Id: `data.id` (will use for keys to improve performance on lists)
> Title: `data.title`
> Author: `data.author`
> entry date: `data.created` or `data.created_utc`, (should format like “x hours ago”)
> thumbnail: `data.preview` (for those who have a picture)
> if have thumbnail or is picture
> Number of comments `data.num_comments`
> Unread status: `data.visited` (probably will be a status in the state)
> Subreddit: `data.subreddit_name_prefixed`
> Permalink: `data.permalink`

Since Reddit API **IS NOT** well documented will use fields as described here.






## Tool reference for this project

1. [Create React App](https://github.com/facebookincubator/create-react-app).
1. [Postman](https://www.getpostman.com/)


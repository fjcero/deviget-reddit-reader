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

1) Will use `top-down` strategy to start creating components and logic. This will reduce the amount of opinionated code and will allow to extend the application in the next steps.

2) First step is to connect to Reddit and get some information from the list of posts. To accomplish that will fetch data from Root component, `App` in this case.

The URL to get this posts is `https://www.reddit.com/top.json`. I use Postman [2] to navigate requests and document APIs endpoints. 

Now will get the specific fields to show in the list and the post detail. The required fields to show will be:

> Id: `data.id` (will use for keys to improve performance on lists)
> Title: `data.title`
> Author: `data.author`
> entry date: `data.created` or `data.created_utc`, (should format like “x hours ago”)
> thumbnail: `data.thumbnail` (for those who have a picture)
> if have thumbnail show previews: `data.preview`
> Number of comments `data.num_comments`
> Unread status: `data.visited` (probably will be a status in the state)
> Subreddit: `data.subreddit_name_prefixed`
> Permalink: `data.permalink`

Since Reddit API **IS NOT** well documented will use fields as described here.

3) We have the connection and fields specified. Next will split the application into presentational (dumb, stateless) and containers (smart, stateful) components. The difference between this two is that one is onle responsible on how UI is shown, can have state but only for presentational purposes; and the other is responsible on how Logic and State between components is transferred.

4) To start building components first will analize the application understand how many components we will have:

![App Components](./docs/app_components.png?raw=true)

The components that we will create are:

1. `App`: container, have the logic and main state of the application. for now we avoid using libs like Redux.
2. `Sidebar`: Will be the presentational component to wrapp sidebar components and how app handles responsiveness.
3. `Content`: Same as Sidebar, but for main content, when a user clicks over a post, content components will render here.
4. `ListSidebar`: This container will handle state and wrap stateless components. Should manage pagination and dismiss actions. Here is were the state of posts is updated.
5. `PostItemList`: This component will handle the view of how a post is rendered in the sidebar list 
6. `PostPreview`: This component will handle the view of a Post Detail

## Tool reference for this project

1. [Create React App](https://github.com/facebookincubator/create-react-app): for Boilerplate
1. [Postman](https://www.getpostman.com/): for API calls
1. [Skitch](https://evernote.com/intl/es/products/skitch): for fast sketching images



/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
    },
    content: {
      text: "Je pense , donc je suis",
    },
    created_at: 1461113959088,
  },
];

const renderTweets = function(tweets) {
  // looping through tweets
  for (let obj of tweets) {
    const $tweet = createTweetElement(obj);
    $(".tweet-container").append($tweet);
  }
};

const createTweetElement = function(obj) {
  let $tweet = `
  <article class="users-tweet">
      <header class="user-tweet-header">
        <div class="avatar-info">
<div class="avatar-name">
        <img class="avatar"src=${obj.user.avatars} />
        <p class="username">${obj.user.name}</p>
      </div>
      <p class="userId">${obj.user.handle}</p>
    </div>
        </i> 
        <p class="info-avatar">${obj.content.text}</p>
      </header>
      <div class="line"></div>
      <footer class="user-tweet-footer">
        <p>${obj.created_at}</p>
        <!-- flag -->
        <div class="symbols">
  <i class="fa-solid fa-flag"></i>
  <!-- retweet -->
  <i class="fa-solid fa-retweet"></i>
  <!-- hearth -->
  <i class="fa-solid fa-heart"></i>
</div>
      </footer>
    </article>
  `;
  return $tweet;
};

$(document).ready(function() {
  console.log("ready!");
  renderTweets(data);
});
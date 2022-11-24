const feed = document.querySelector(".feed")
const post = document.createElement("div");
post.setAttribute("class","posts");
feed.appendChild(post);
const vote = document.createElement("div");
vote.setAttribute("class","vote");
post.appendChild(vote);
const arrow = document.createElement("img")
arrow.setAttribute("src","https://cdn.iconscout.com/icon/premium/png-256-thumb/shift-3028045-2520476.png");
vote.appendChild(arrow)
const number = document.getElementById("number")
vote.appendChild(number)
const arrow1 = document.createElement("img")
arrow1.setAttribute("src","https://cdn.iconscout.com/icon/premium/png-256-thumb/down-key-1539282-1304375.png")
arrow1.setAttribute("class","arrow1")
vote.appendChild(arrow1)
const author = document.getElementById("post-author");
post.appendChild(author);
const post_feed = document.getElementById("post-feed");
post.appendChild(post_feed)
const post_down_nav = document.querySelector(".post-nav-down")
post.appendChild(post_down_nav)
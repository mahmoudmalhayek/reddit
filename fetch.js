const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f9f5b650edmsh06185f8b68f078ep1b10b3jsn3254b0176c76",
    "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
  },
};

fetch(
  "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null",
  options
)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("news-title1").innerText +=
      data.value[0].title.substring(0, 30);
    document.getElementById("news-description1").innerText +=
      data.value[0].description.substring(0, 48);
    document.getElementById("news-author1").innerText +=
      data.value[0].provider.name.substring(0, 20);

    document.getElementById("news-title2").innerText +=
      data.value[1].title.substring(0, 30);
    document.getElementById("news-description2").innerText +=
      data.value[1].description.substring(0, 48);
    document.getElementById("news-author2").innerText +=
      data.value[1].provider.name.substring(0, 20);

    document.getElementById("news-title3").innerText +=
      data.value[2].title.substring(0, 30);
    document.getElementById("news-description3").inneinnerTextrHTML +=
      data.value[2].description.substring(0, 48);
    document.getElementById("news-author3").innerText +=
      data.value[2].provider.name.substring(0, 20);

    document.getElementById("news-title4").innerText +=
      data.value[3].title.substring(0, 30);
    document.getElementById("news-description4").innerText +=
      data.value[3].description.substring(0, 48);
    document.getElementById("news-author4").innerText +=
      data.value[3].provider.name.substring(0, 20);
  })
  .catch((err) => console.error(err));

fetch(" https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => {
    for (let i = 0; i < 12; i++) {
      const feed = document.querySelector(".feed");
      const post = document.createElement("div");
      post.setAttribute("class", "posts");
      feed.appendChild(post);
      const vote = document.createElement("div");
      vote.setAttribute("class", "vote");
      post.appendChild(vote);
      const arrow = document.createElement("img");
      arrow.setAttribute(
        "src",
        "https://cdn.iconscout.com/icon/premium/png-256-thumb/shift-3028045-2520476.png"
      );
      vote.appendChild(arrow);
      const number = document.createElement("p");
      number.textContent = "58.5K";
      number.setAttribute("id", "number");
      vote.appendChild(number);
      const arrow1 = document.createElement("img");
      arrow1.setAttribute(
        "src",
        "https://cdn.iconscout.com/icon/premium/png-256-thumb/shift-3028045-2520476.png"
      );
      arrow1.setAttribute("class", "arrow1");
      vote.appendChild(arrow1);
      const author = document.createElement("p");
      author.textContent = "r/";
      author.setAttribute("id", "post-author");
      author.innerText += json[i].body.substring(0, 8);
      post.appendChild(author);
      const post_feed = document.createElement("h2");
      post_feed.setAttribute("id", "post_feed");
      post_feed.innerText += json[i].title.substring(0, 69);
      post.appendChild(post_feed);
      const post_down_nav = document.createElement("div");
      post_down_nav.setAttribute("class", "post_down_nav");
      post.appendChild(post_down_nav);
      var comments = document.createElement("a");
      comments.href = "#";
      var element1 = document.createElement("img");
      element1.setAttribute("id","comment-img");
      element1.src = "https://cdn1.iconfinder.com/data/icons/business-office-and-internet-3-4/48/102-512.png";
      comments.textContent = "Comments";
      comments.appendChild(element1);
      post_down_nav.appendChild(comments);


      var Share = document.createElement("a");
      Share.href = "#";
      var element2 = document.createElement("img");
      element2.setAttribute("id","share-img");
      element2.src = "http://cdn.onlinewebfonts.com/svg/img_260366.png";
      Share.textContent = "Share";
      Share.appendChild(element2);
      post_down_nav.appendChild(Share);


      var Save = document.createElement("a");
      Save.href = "#";
      var element3 = document.createElement("img");
      element3.setAttribute("id","save-img");
      element3.src = "https://uxwing.com/wp-content/themes/uxwing/download/user-interface/saved-icon.png";
      Save.textContent = "Save";
      Save.appendChild(element3);
      post_down_nav.appendChild(Save);


      // const number = document.getElementById("number");
      // vote.appendChild(number);
      // const author = document.getElementById("post-author");
      // post.appendChild(author);
      // const post_feed = document.getElementById("post-feed");
      // post.appendChild(post_feed);
      // const post_down_nav = document.querySelector(".post-nav-down");
      // post.appendChild(post_down_nav);
      // const region = document.querySelector(".region");
      // feed.appendChild(region);
    }
  });

  // fetch("https://jsonplaceholder.typicode.com/users")
  // .then((response) => response.json())
  // .then((json) => {
  //   for (let i = 0; i < 12; i++) {
  //   const author = document.createElement("p");
  //     author.textContent = "r/";
  //     author.setAttribute("id", "post-author");
  //     post.appendChild(author);
  //   }
  // });

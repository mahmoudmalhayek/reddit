const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f9f5b650edmsh06185f8b68f078ep1b10b3jsn3254b0176c76',
		'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
	}
};

fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null', options)
	.then(response => response.json())
	.then(data => {
            document.getElementById("news-title1").innerText += (data.value[0].title).substring(0,30);
            document.getElementById("news-description1").innerText += data.value[0].description.substring(0,48);
            document.getElementById("news-author1").innerText += data.value[0].provider.name.substring(0,20);

            document.getElementById("news-title2").innerHTML += data.value[1].title.substring(0,30);
            document.getElementById("news-description2").innerHTML += data.value[1].description.substring(0,48);
            document.getElementById("news-author2").innerHTML += data.value[1].provider.name.substring(0,20);

            document.getElementById("news-title3").innerHTML += data.value[2].title.substring(0,30);
            document.getElementById("news-description3").innerHTML += data.value[2].description.substring(0,48);
            document.getElementById("news-author3").innerHTML += data.value[2].provider.name.substring(0,20);

            document.getElementById("news-title4").innerHTML += data.value[3].title.substring(0,30);
            document.getElementById("news-description4").innerHTML += data.value[3].description.substring(0,48);
            document.getElementById("news-author4").innerHTML += data.value[3].provider.name.substring(0,20);
    })
	.catch(err => console.error(err));
    
    
    fetch(' https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json =>{

        json.forEach(element => {
            const post = document.createElement("div");
            post.setAttribute("class","posts");
            post.appendChild(document.getElementsByClassName("feed"));
        });
  })
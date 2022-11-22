fetch('https://newsapi.org/v2/everything?q=apple&from=2022-11-19&to=2022-11-19&sortBy=popularity&apiKey=d63e1c979b1e49baac598260bfb10650')
.then(response => response.json())
// .then(data => console.log(data.articles[0].title))
.then((data) => {
            
            document.getElementById("news-title1").innerText += (data.articles[0].title).substring(0,30);
            document.getElementById("news-description1").innerText += data.articles[0].description.substring(0,48);
            document.getElementById("news-author1").innerText += data.articles[0].author.substring(0,20);

            document.getElementById("news-title2").innerHTML += data.articles[1].title.substring(0,30);
            document.getElementById("news-description2").innerHTML += data.articles[1].description.substring(0,48);
            document.getElementById("news-author2").innerHTML += data.articles[1].author.substring(0,20);

            document.getElementById("news-title3").innerHTML += data.articles[2].title.substring(0,30);
            document.getElementById("news-description3").innerHTML += data.articles[2].description.substring(0,48);
            document.getElementById("news-author3").innerHTML += data.articles[2].author.substring(0,20);

            document.getElementById("news-title4").innerHTML += data.articles[3].title.substring(0,30);
            document.getElementById("news-description4").innerHTML += data.articles[3].description.substring(0,48);
            document.getElementById("news-author4").innerHTML += data.articles[3].author.substring(0,20);
        
})

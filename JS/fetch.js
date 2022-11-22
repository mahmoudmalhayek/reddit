fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-10-20&sortBy=publishedAt&apiKey=d63e1c979b1e49baac598260bfb10650')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
            document.getElementById("news-title1").innerHTML += data[0].title;
            document.getElementById("news-description1").innerHTML += data[0].description;
            document.getElementById("news-author1").innerHTML += data[0].author;

            document.getElementById("news-title2").innerHTML += data[1].title;
            document.getElementById("news-description2").innerHTML += data[1].description;
            document.getElementById("news-author2").innerHTML += data[1].author;

            document.getElementById("news-title3").innerHTML += data[2].title;
            document.getElementById("news-description3").innerHTML += data[2].description;
            document.getElementById("news-author3").innerHTML += data[2].author;

            document.getElementById("news-title4").innerHTML += data[3].title;
            document.getElementById("news-description4").innerHTML += data[3].description;
            document.getElementById("news-author4").innerHTML += data[3].author;
        
    })
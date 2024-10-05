const news = document.getElementById("news");
const apiUrl = 'https://newsdata.io/api/1/news?apikey=pub_552533c4df0fb7b787a7d8b0bd22cb583f5cf&q=pizza';

async function fetchData() {
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        displayNews(data.results);

        console.log(data); 
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}


function displayNews(newsArticles) {
    let htmlContent = '';

    newsArticles.forEach(article => {
        htmlContent += `
            <div class="article">
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                <a href="${article.link}" target="_blank">Read more</a>
            </div>
            <hr>
        `;
    });

   
    news.innerHTML = htmlContent;
}


fetchData();

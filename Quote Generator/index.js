const quote = document.querySelector("#quote");
const author = document.querySelector("#author");


function getQuote(){
fetch('https://quotes-api-self.vercel.app/quote')
  .then(response => {
    if (response.ok) {
      return response.json(); // Parse the response data as JSON
    } else {
      throw new Error('API request failed');
    }
  })
  .then(data => {
    // Process the response data here
    quote.innerText = data.quote;
    
    author.innerHTML=data.author;
  })
  .catch(error => {
    // Handle any errors here
    console.error(error); // Example: Logging the error to the console
  });
}

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
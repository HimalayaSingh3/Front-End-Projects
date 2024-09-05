
const meme = document.querySelector("#meme");


function getMeme(){
fetch('https://meme-api.com/gimme')
  .then(response => {
    if (response.ok) {
      return response.json(); // Parse the response data as JSON
    } else {
      throw new Error('API request failed');
    }
  })
  .then(data => {
    // Process the response data here
    meme.src= data.url;
    
  })
  .catch(error => {
    // Handle any errors here
    console.error(error); // Example: Logging the error to the console
  });
}

window.addEventListener("load", getMeme);
btn.addEventListener("click", getMeme);
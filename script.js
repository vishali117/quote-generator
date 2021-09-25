const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

//let apiQuotes = []; 

//show loading spinner
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true; 
}

//remove loading spinner
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

//show new Quote
function newQuote(){
    loading();
    //pick a random quotes from api quotes array
    const quote=localQuotes[Math.floor(Math.random() * localQuotes.length)];
    //authorText.textContent = quote.author;
    //replace blank author field into únknown'
    if(!quote.author){
        authorText.textContent = "Unknown";
    }else{
        authorText.textContent = quote.author;
    }
    //check quote length to determine styling
    if(quote.text.length>40){
        quoteText.classList.add('longQuote');
    }else{
        quoteText.classList.remove('longQuote');
    }

    //set quote, hide loader
        quoteText.textContent = quote.text;
        complete();
}

//Get Quotes from API
// async function getQuotes() {
    loading();
//     const apiUrl = 'https://type.fit/api/quotes';
//     try{
//       const response = await fetch(apiUrl);
//       apiQuotes = await response.json();
//       newQuote();
//     }catch (error) {
//           // catch error here 
//       }
//     }

//tweet Quote
function tweetQuote(){
    const twitterUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event Listeners
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);


// on load
//getQuotes();
newQuote();
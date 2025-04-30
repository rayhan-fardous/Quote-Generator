//const quoteContainer = document.getElementById('quote-container');

//const newQuoteBtn = document.getElementById('new-quote');
//const twitterBtn = document.getElementById('twitter');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const apiKey = 'rvJzZt54O4ZOqMBqSCzQyUEXx3B2HuNZgRVOgYRX';
const apiUrl = 'https://api.api-ninjas.com/v1/quotes';

async function getQuote() {
    try {
        const response = await fetch(apiUrl, {
            headers: {
                'X-Api-Key': apiKey
            }
        });

        const data = await response.json();
        const quoteData = data[0]; // API returns an array

        quoteText.textContent = quoteData.quote;
        authorText.textContent = quoteData.author || 'Unknown';
    } catch (error) {
        quoteText.textContent = "Oops! Could not fetch quote.";
        authorText.textContent = "";
        console.error('Error:', error);
    }
}

 // Load one on start


// // Tweet Quote
// function tweetQuote() {
//     const quote = quoteText.textContent;
//     const author = authorText.textContent;
//     const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`;
//     window.open(twitterUrl, '_blank');
// }

// // Event Listeners
// newQuoteBtn.addEventListener('click', getQuote);
// twitterBtn.addEventListener('click', tweetQuote);

// Load initial quote
getQuote();


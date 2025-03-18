function fetchQuote(emotion) {
    fetch(`/api/quotes/emotion/${emotion}`)
        .then(response => response.json())
        .then(quotes => {
            console.log("📜 Received Quotes:", quotes); // Debugging line

            if (Array.isArray(quotes) && quotes.length > 0) {
                const displayQuote = quotes[Math.floor(Math.random() * quotes.length)];
                
                document.getElementById('quote-text').innerText = `"${displayQuote.affirmation}"`;
                document.getElementById('quote-source').innerText = displayQuote.source ? `- ${displayQuote.source}` : "- Unknown";
            } else {
                document.getElementById('quote-text').innerText = "No quotes found for this emotion.";
                document.getElementById('quote-source').innerText = "";
            }
        })
        .catch(error => {
            console.error("❌ Error fetching quote:", error);
            document.getElementById('quote-text').innerText = "Error fetching quote. Try again.";
            document.getElementById('quote-source').innerText = "";
        });
}

function fetchRandomQuote() {
    fetch('/api/quotes/random')
        .then(response => response.json())
        .then(randomQuote => {
            console.log("🎲 Random Quote Response:", randomQuote.affirmation); // Debugging line

            
            if (!randomQuote || !randomQuote.affirmation) {
                document.getElementById('quote-text').innerText = "No random quotes available.";
                document.getElementById('quote-source').innerText = "";
                return;
            }else{
            document.getElementById('quote-text').innerText = `"${randomQuote.affirmation}"`;
            document.getElementById('quote-source').innerText = randomQuote.source ? `- ${randomQuote.source}` : "- Unknown";
            }
        })
        .catch(error => {
            console.error("❌ Error fetching random quote:", error);
            document.getElementById('quote-text').innerText = "Error fetching quote. Try again.";
            document.getElementById('quote-source').innerText = "";
        });
}

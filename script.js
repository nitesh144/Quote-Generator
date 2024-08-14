async function fetchQuote(){
    try{
        const response = await fetch("https://type.fit/api/quotes");
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        const data = await response.json();
        const randomQuote = data[Math.floor(Math.random() * data.length)];
        return `"${randomQuote.text}" - ${randomQuote.author || "Unknown"}`;
    } catch(error) {
        console.log("Error: " + error);
        return "Failed to fetch a quote. Please try again later.";
    }
}

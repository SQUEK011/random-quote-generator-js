import QuoteGenerator from "./quoteGenerator.js";

document.addEventListener("DOMContentLoaded", function () {
  const quoteText = document.querySelector(".quote-text");
  const newQuoteButton = document.querySelector("#newQuoteButton");
  const twitterButton = document.querySelector(".btn-twitter");
  const loadingSpinner = document.querySelector("#loadingSpinner");

  // Create an instance of QuoteGenerator
  const quoteGenerator = new QuoteGenerator(
    quoteText,
    newQuoteButton,
    twitterButton,
    loadingSpinner
  );

  // Fetch an initial quote when the page loads
  quoteGenerator.fetchQuote();
});

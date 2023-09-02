class QuoteGenerator {
  constructor(quoteTextElement, newQuoteButton, twitterButton, loadingSpinner) {
    this.quoteTextElement = quoteTextElement;
    this.newQuoteButton = newQuoteButton;
    this.twitterButton = twitterButton;
    this.loadingSpinner = loadingSpinner;

    this.newQuoteButton.addEventListener("click", this.fetchQuote.bind(this));
  }

  async fetchQuote() {
    try {
      this.quoteTextElement.textContent = "";
      this.loadingSpinner.style.display = "inline-block";

      const response = await fetch("https://api.quotable.io/random");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      this.displayQuote(data);

      this.loadingSpinner.style.display = "none";
    } catch (error) {
      this.handleQuoteError(error);
    }
  }

  displayQuote(quoteData) {
    const { content, author } = quoteData;
    this.quoteTextElement.textContent = `"${content}" - ${author}`;
    const tweetText = encodeURIComponent(`"${content}" - ${author}`);
    this.twitterButton.href = `https://twitter.com/intent/tweet?text=${tweetText}`;
  }

  handleQuoteError(error) {
    console.error("Error fetching quote:", error);
    this.loadingSpinner.style.display = "none";
    this.quoteTextElement.textContent =
      "Oops! Something went wrong. Please try again later.";
  }
}

export default QuoteGenerator;

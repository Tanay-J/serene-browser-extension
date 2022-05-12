import { useEffect, useState } from "react";
import { getRandomQuote } from "../utils/api-requests";

const Quote = () => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    getRandomQuote(setQuote);
    const timer = setInterval(() => getRandomQuote(setQuote), 1800000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="quote-container text-center text-light">
      <small>{quote.text}</small> -{" "}
      <small>
        <em>{quote.author}</em>
      </small>
    </div>
  );
};
export { Quote };

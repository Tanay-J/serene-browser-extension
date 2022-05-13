import { useEffect, useState } from "react";
import { useSettings } from "../contexts/settings-context";
import { getRandomQuote } from "../utils/api-requests";

const Quote = () => {
  const [quote, setQuote] = useState({});
  const {
    settings: { quoteRefreshTime },
  } = useSettings();

  useEffect(() => {
    getRandomQuote(setQuote);
    const timer = setInterval(() => getRandomQuote(setQuote), quoteRefreshTime);
    return () => clearInterval(timer);
  }, [quoteRefreshTime]);

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

import "../footer.css";
import quote from "../images/quote.svg";
import Made from "./Made";
import placeHolda from "../images/testimonial-placeholder.svg";
import ginnie from "../images/ginnie.jpg";

export default function TestimonialFooter() {
  return (
    <div className="footer--wrapper">
      <div className="footer--testimonial-container">
        <div className="footer--testimonial-container-inside">
          <div className="footer--testimonial-img-container">
            <div className="footer--testimonial-img-parent">
              <img
                className="footer--testimonial-img"
                alt="Happy furry parent"
                src={ginnie}
              />
            </div>
          </div>
          <div className="footer--testimonial-content">
            <img className="footer--quote-img" alt="quote" src={quote} />
            <p className="footer--testimonial-text">
              Ginnie was supposed to be our first foster dog but we fell in love
              with her the day we picked her up from the rescue. Ginnie adjusted
              so quickly, it was as if she had been living with us our whole
              lives!
            </p>
            <p className="footer--testimonial-name">Lauren | Horn Lake, MS</p>
          </div>
        </div>
      </div>
      <Made />
    </div>
  );
}

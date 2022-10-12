import "../footer.css";
import quote from "../images/quote.svg";
import placeHolda from "../images/testimonial-placeholder.svg";

export default function TestimonialFooter() {
  return (
    <div className="footer--wrapper">
      <div className="footer--testimonial-container">
        <div className="footer--testimonial-container-inside">
          <div className="footer--testimonial-img-container">
            <div className="footer--testimonial-img-stroke">
              <img
                className="footer--testimonial-parent"
                alt="Happy furry parent"
                src={placeHolda}
              />
            </div>
          </div>
          <div className="footer--testimonial-content">
            <img className="footer--quote-img" alt="quote" src={quote} />
            <p className="footer--testimonial-text">
              Very happy with this crazy cat. The other day I realized he can
              play the piano. I would adopt another pet in a heartbeat. Highly
              recommended!
            </p>
            <p className="footer--testimonial-name">Chris Nolan</p>
          </div>
        </div>
      </div>
      {/* <p className="footer-p">Made with 🤍 in KC</p> */}
    </div>
  );
}

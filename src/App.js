import { useState } from "react";

export default function App() {
  return (
    <div>
      <PricingComponenet />
    </div>
  );
}

function PricingComponenet() {
  return (
    <div>
      <Background />
      <ContainerBackground />
    </div>
  );
}

function Background() {
  return (
    <div className="background">
      <div className="container-Heading">
        <img
          src="images/pattern-circles.svg"
          className="images"
          alt="pattern-circles"
        />

        <div className="section-position">
          <h1>Simple, traffic-based pricing</h1>
          <p>Sign-up for our 30-day trial. No credit card required.</p>
        </div>
      </div>
    </div>
  );
}

const ranges = [10000, 50000, 100000, 500000, 1000000];

function valueToLabel(value) {
  if (value === 10000) return "10k PAGEVIEWS";
  if (value === 50000) return "50k PAGEVIEWS";
  if (value === 100000) return "100k PAGEVIEWS";
  if (value === 500000) return "500k PAGEVIEWS";
  if (value === 1000000) return "1m PAGEVIEWS";
  return "";
}

function ContainerBackground() {
  const [rangeView, setRangeView] = useState(100000);
  const [displayedPrice, setDisplayedPrice] = useState("100k PAGEVIEWS");
  const [price, setPrice] = useState("$16");
  

  const handlePriceChange = (e) => {
    const updatedPrice = parseInt(e.target.value);
    setRangeView(updatedPrice);

    if (updatedPrice === 10000) {
      setDisplayedPrice("10k  PAGEVIEWS");

      setPrice("$8");
    } else if (updatedPrice === 50000) {
      setDisplayedPrice("50k PAGEVIEWS");

      setPrice("$12");
    } else if (updatedPrice === 100000) {
      setDisplayedPrice("100k PAGEVIEWS");

      setPrice("$16");
    } else if (updatedPrice === 500000) {
      setDisplayedPrice("500k PAGEVIEWS");

      setPrice("$24");
    } else if (updatedPrice === 1000000) {
      setDisplayedPrice("1m PAGEVIEWS");

      setPrice("$36");
    }
  };

  return (
    <div className="pricing-container">
      <div className="container-background">
        <div className="contents">
          <p>{displayedPrice}</p>
          <span>
            <h1>{price}</h1>
            /month
          </span>
        </div>

        <input
          className="input__range"
          type="range"
          min={ranges[0]}
          max={ranges[ranges.length - 1]}
          value={rangeView}
          step={10000}
          onChange={handlePriceChange}
        />

        <div className="discount-container">
          <section>
            <h1>Monthly Billing</h1>
          </section>

          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>

          <section>
            <h1>Yearly Billing</h1>
          </section>

          <main>
            <h2>25% discount</h2>
          </main>
        </div>

        <div className="line"></div>

        <div className="footer-container">
          <footer>
            <div className="trial-container">
              <div className="article-container">
                <img
                  src="images/icon-check.svg"
                  className="image-check"
                  alt="icon-check"
                />
                <h3>Unlimited websites</h3>
              </div>

              <div  className="article-container">
                <img
                  src="images/icon-check.svg"
                  className="image-check"
                  alt="icon-check"
                />
                <h3>100% data ownership</h3>
              </div>

              <div  className="article-container">
                <img
                  src="images/icon-check.svg"
                  className="image-check"
                  alt="icon-check"
                />
                <h3>Email reports</h3>
              </div>
            </div>

            <div className="start__trial">
              <button className="btn-trial">Start my trial</button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

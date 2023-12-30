import React, { useState, useRef, useEffect } from "react";

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
  if (value === 10000) return "10K PAGEVIEWS";
  if (value === 50000) return "50K PAGEVIEWS";
  if (value === 100000) return "100K PAGEVIEWS";
  if (value === 500000) return "500K PAGEVIEWS";
  if (value === 1000000) return "1M PAGEVIEWS";
  return "";
}

function ContainerBackground() {
  const [rangeView, setRangeView] = useState(10000);
  const [displayedPrice, setDisplayedPrice] = useState("10K PAGEVIEWS");
  const [originalPrice, setOriginalPrice] = useState("$8.00");
  const [price, setPrice] = useState("$8");
  const [toggler, setToggler] = useState(false);

  const handleInputChange = (e) => {
    const track = e.target;
    if (track && track.style) {
      const thumbColor = "hsl(174, 86%, 45%)"; // Color for the thumb
      const thumbPosition =
        ((track.value - track.min) / (track.max - track.min)) * 100;

      const trackFill = `linear-gradient(to right, ${thumbColor} 0%, ${thumbColor} ${thumbPosition}%, hsl(224, 65%, 95%) ${thumbPosition}%, hsl(224, 65%, 95%) 100%)`;

      track.style.background = trackFill;
    }
  };

  useEffect(() => {
    const track = document.querySelector(".input__range");
    if (track) {
      const thumbColor = "hsl(174, 86%, 45%)"; // Color for the thumb
      const initialTrackFill = `linear-gradient(to right, ${thumbColor} 0%, ${thumbColor} 0%, hsl(224, 65%, 95%) 0%, hsl(224, 65%, 95%) 100%)`;
      track.style.background = initialTrackFill;
    }
  }, []);

  const handlePriceChange = (e) => {
    const updatedPrice = parseInt(e.target.value);
    setRangeView(updatedPrice);

    if (updatedPrice === 10000) {
      setDisplayedPrice("10K  PAGEVIEWS");
      setOriginalPrice("$8.00");
      setPrice("$8.00");
    } else if (updatedPrice === 50000) {
      setDisplayedPrice("50K PAGEVIEWS");
      setOriginalPrice("$12.00");
      setPrice("$12.00");
    } else if (updatedPrice === 100000) {
      setDisplayedPrice("100K PAGEVIEWS");
      setOriginalPrice("$16.00");
      setPrice("$16.00");
    } else if (updatedPrice === 500000) {
      setDisplayedPrice("500K PAGEVIEWS");
      setOriginalPrice("$24.00");
      setPrice("$24.00");
    } else if (updatedPrice === 1000000) {
      setDisplayedPrice("1M PAGEVIEWS");
      setOriginalPrice("$36.00");
      setPrice("$36.00");
    }
  };

  useEffect(() => {
    if (toggler) {
      const originalPrice = parseFloat(price.substring(1));
      const discountedPrice = originalPrice * 0.75; // Apply a 25% discount
      setPrice(`$${discountedPrice.toFixed(2)}`);
    } else {
      setPrice(originalPrice);
    }
  }, [toggler, originalPrice]);

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
          onChange={(e) => {
            handleInputChange(e);
            handlePriceChange(e);
          }}
        />

        <div className="discount-container">
          <section>
            <h1>Monthly Billing</h1>
          </section>

          <label className="switch">
            <input
              type="checkbox"
              onChange={(e) => setToggler(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>

          <section>
            <h1>Yearly Billing</h1>
          </section>

          <main>
            <p className="minus">-</p>
            <h2>25%</h2>
            <small>discount</small>
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

              <div className="article-container">
                <img
                  src="images/icon-check.svg"
                  className="image-check"
                  alt="icon-check"
                />
                <h3>100% data ownership</h3>
              </div>

              <div className="article-container">
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

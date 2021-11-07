import React from "react";
import heroimg from "../images/hero.webp";
import styled from "styled-components";
import customer1 from "../images/customer-1.jpg";
import customer2 from "../images/customer-2.jpg";
import customer3 from "../images/customer-3.jpg";
import customer4 from "../images/customer-4.jpg";
import customer5 from "../images/customer-5.jpg";
import customer6 from "../images/customer-6.jpg";

const images = [
  customer1,
  customer2,
  customer3,
  customer4,
  customer5,
  customer6,
];

const Hero = () => {
  return (
    <main>
      <HeroContainer>
        <div className="hero">
          <div className="hero-text-box">
            <h1>
              A healthy meal delivered to your door, every single day
            </h1>
            <p>
              The smart 365-days-per-year food subscription that will make
              you eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>
            <a href="/#" className="btn btn--full">
              Start eating well
            </a>
            <a href="#how" className="btn btn--outline">
              Learn more ↓
            </a>
            <div className="delivered-meals">
              <div className="delivered-imgs">
                {images.map((img, index) => (
                  <img key={index} src={img} alt="Customer" />
                ))}
              </div>
              <p class="delivered-text">
                <span>250,000+</span> meals delivered last year!
              </p>
            </div>
          </div>
          <div className="hero-img-box">
            <picture>
              <img src={heroimg} alt="hero" />
            </picture>
          </div>
        </div>
      </HeroContainer>
    </main>
  );
};

const HeroContainer = styled.div`
  background-color: rgb(253, 242, 233);
  padding: 4.8rem 0 9.6rem;
  .hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 9.6rem;
    padding: 0 3.2rem;
    max-width: 120rem;
    margin: 0 auto;
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      gap: 6.4rem;
    }
  }
  .hero-img-box {
    text-align: center;
    img {
      width: 100%;
      @media (max-width: 992px) {
        width: 60%;
        margin: 0 auto;
      }
    }
  }

  .delivered-meals {
    display: flex;
    gap: 1.6rem;
    margin-top: 8rem;
    @media (max-width: 992px) {
      margin-top: 3.2rem;
      justify-content: center;
    }
  }
  .delivered-imgs {
    display: flex;

    img {
      height: 4.8rem;
      width: 4.8rem;
      border-radius: 50%;
      border: 3px solid #fdf2e9;
      &:not(:last-child) {
        margin-right: -1.6rem;
      }
    }
  }
  .delivered-text {
    font-weight: 600;

    span {
      color: #cf711f;
      font-weight: 700;
    }
  }
  .hero-text-box {
    @media (max-width: 992px) {
      text-align: center;
    }
    h1 {
      font-size: 4.4rem;
      line-height: 1.05;
      margin-bottom: 3.2rem;
      font-weight: 700;
      color: rgb(51, 51, 51);
      letter-spacing: -0.5px;
    }
    p {
      font-size: 2rem;
      line-height: 1.6;
      margin-bottom: 4.8rem;
    }
  }
  .btn {
    display: inline-block;
    text-decoration: none;
    font-size: 2rem;
    font-weight: 600;
    padding: 1.6rem 3.2rem;
    border-radius: 9px;
    border: none;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.3s ease 0s;
    @media (max-width: 1200px) {
      padding: 1.6rem;
      font-size: 1.5rem;
    }

    &--full {
      background-color: rgb(230, 126, 34);
      color: rgb(255, 255, 255);
      margin-right: 3rem;
    }
    &--outline {
      background-color: rgb(255, 255, 255);
      color: rgb(85, 85, 85);
    }
  }
`;

export default Hero;

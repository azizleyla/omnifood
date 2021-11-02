import React from "react";
import heroimg from "../images/hero.webp";
import styled from "styled-components";
const Hero = () => {
  return (
    <main>
      <HeroContainer>
        <div className="hero-text-box">
          <h1>A healthy meal delivered to your door, every single day</h1>
          <p>
            The smart 365-days-per-year food subscription that will make
            you eat healthy again. Tailored to your personal tastes and
            nutritional needs.
          </p>
          <a href="" className="btn btn--full">
            Start eating well
          </a>
          <a href="" className="btn btn--outline">
            Learn more
          </a>
        </div>
        <div className="hero-img-box">
          <picture>
            <img src={heroimg} alt="hero" />
          </picture>
        </div>
      </HeroContainer>
    </main>
  );
};

const HeroContainer = styled.div`
  background-color: rgb(253, 242, 233);
  padding: 4.8rem 32px 9.6rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 9.6rem;
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

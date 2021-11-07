import React from "react";
import styled from "styled-components";
import logo1 from "../images/techcrunch.png";
import logo2 from "../images/business-insider.png";
import logo3 from "../images/the-new-york-times.png";
import logo4 from "../images/forbes.png";
import logo5 from "../images/usa-today.png";
const logos = [logo1, logo2, logo3, logo4, logo5];

const Logos = () => {
  return (
    <LogosContainer>
      <div className="container">
        <h2 className="heading-featured-in">As featured in</h2>
        <div className="logos">
          {logos.map((logo, index) => (
            <img key={index} className="logo" src={logo} alt="logo" />
          ))}
        </div>
      </div>
    </LogosContainer>
  );
};
const LogosContainer = styled.div`
  padding: 4.8rem 0 3.2rem 0;
  h2 {
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 0.75px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 2.4rem;
    color: #888;
  }

  .logos {
    display: flex;
    justify-content: space-around;
  }
  .logo {
    height: 3.2rem;
    filter: brightness(0);
    opacity: 50%;
    @media (max-width: 992px) {
      height: 2.4rem;
    }
    @media (max-width: 776px) {
      height: 1.5rem;
    }
  }
`;

export default Logos;

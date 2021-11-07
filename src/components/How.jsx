import React from "react";
import styled from "styled-components";
import { steps } from "../constants";

const How = () => {
  return (
    <SectionHow>
      <div className="container">
        <span className="subheading">How it works</span>
        <h2 className="heading-secondary">
          Your daily dose of health in 3 simple steps
        </h2>
      </div>
      <div className="steps-container">
        {steps.map((step) => {
          const { id, order, title, description, img } = step;

          return (
            <Step
              key={id}
              reversed={order === "02" ? true : false}
              className="step container"
            >
              <div className="step-text-box">
                <p className="step-number">{order}</p>
                <h3 className="heading-tertiary">{title}</h3>
                <p className="step-description">{description}</p>
              </div>
              <div className="step-img-box">
                <img src={img} alt="step" />
              </div>
            </Step>
          );
        })}
      </div>
    </SectionHow>
  );
};
const Step = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.reversed ? "row-reverse" : "row")};
  align-items: center;
  gap: 9.6rem 6.4rem;
  @media (max-width: 776px) {
    flex-direction: column;
  }
  .step-description {
    font-size: 1.8rem;
    line-height: 1.8;
  }
  .step-img-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    position: relative;
    &::before {
      content: "";
      display: block;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60%;
      padding-bottom: 60%;
      background-color: rgb(253, 242, 233);
      z-index: -2;
    }
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 45%;
      padding-bottom: 45%;
      background-color: rgb(250, 229, 211);
      z-index: -1;
    }
    img {
      width: 35%;
    }
  }
  .step-text-box {
    flex: 1;
  }
  .step-number {
    font-size: 8.6rem;
    font-weight: 600;
    color: #ddd;
    margin-bottom: 1.2 rem;
  }
`;
const SectionHow = styled.section`
  padding: 9.6rem 0;

  .heading-tertiary {
    font-size: 3rem;
    line-height: 1.2;
    margin-bottom: 3.2rem;
  }
`;

export default How;

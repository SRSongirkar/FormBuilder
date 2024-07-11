// src/Components/ExplorationSection.js
import React from "react";
import styled from "styled-components";

import img1 from "../Images/img1.png";
import img2 from "../Images/img2.png";
import img3 from "../Images/img3.png";
import img4 from "../Images/img4.png";
import img5 from "../Images/img5.png";

const SectionContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding-top: 30px;
  margin: 0 auto;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    gap: 10px;
  }
`;

const HeadingText = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  line-height: 2rem;
  color: rgb(36, 36, 36);
`;

const Card = styled.div`
  position: relative;
  width: calc(20% - 20px); /* Adjust this width calculation as needed */
  max-width: 200px; /* Limit the maximum width of each card */
  flex: 1 0 auto; /* Ensure cards grow to fill the space evenly */
  border: 4px solid #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    width: calc(25% - 10px);
    max-width: 160px;
  }

  @media (max-width: 768px) {
    width: calc(33.33% - 10px);
    max-width: 150px;
  }

  @media (max-width: 480px) {
    width: calc(50% - 10px);
    max-width: 120px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block; /* Ensure image behaves correctly inside its container */
`;

const ImageTextOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  color: #fff;
  padding: 8px;
  text-align: center;
  color: rgb(255, 255, 255);
  text-shadow: rgba(0, 0, 0, 0.14) 0px 0.25rem 0.5rem,
    rgba(0, 0, 0, 0.12) 0px 0px 0.125rem;
  font-size: 1rem;
  font-weight: 700;
`;

const ExplorationSection = () => {
  return (
    <SectionContainer>
      <HeadingText>Exploration Section</HeadingText>
      <CardContainer>
        <Card>
          <CardImage src={img1} alt="Survey" />
          <ImageTextOverlay>Survey</ImageTextOverlay>
        </Card>
        <Card>
          <CardImage src={img2} alt="Quizz" />
          <ImageTextOverlay>Quizz</ImageTextOverlay>
        </Card>
        <Card>
          <CardImage src={img3} alt="Invitation" />
          <ImageTextOverlay>Invitation</ImageTextOverlay>
        </Card>
        <Card>
          <CardImage src={img4} alt="Check-in" />
          <ImageTextOverlay>Check-in</ImageTextOverlay>
        </Card>
        <Card>
          <CardImage src={img5} alt="Image 5" />
        </Card>
      </CardContainer>
    </SectionContainer>
  );
};

export default ExplorationSection;

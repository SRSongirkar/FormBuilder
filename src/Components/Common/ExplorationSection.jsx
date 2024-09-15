import React from "react";
import img1 from "../../Images/img1.png";
import img2 from "../../Images/img2.png";
import img3 from "../../Images/img3.png";
import img4 from "../../Images/img4.png";
import img5 from "../../Images/img5.png";
import { SectionContainer, CardContainer, HeadingText, Card, CardImage, ImageTextOverlay } from "../../Styled/ExplorationSectionStyles";

const ExplorationSection = () => {
  return (
    <SectionContainer>
      <HeadingText variant="h2">Exploration Section</HeadingText>
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

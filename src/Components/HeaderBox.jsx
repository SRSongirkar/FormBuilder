// src/Components/HeaderBox.js
import React from "react";
import styled from "styled-components";
import FormIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  margin: 0 auto;

  @media (max-width: 768px) {
    justify-content: center;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    justify-content: center;
    font-size: 10px;
  }
`;

const LeftButton = styled.button`
  padding: 8px 16px;
  min-width: unset;
  line-height: 20px;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  background: linear-gradient(
    to right,
    rgb(29, 131, 135) 0%,
    rgb(3, 120, 124) 14%,
    rgb(0, 69, 138) 100%
  );
  border: none;
  border-radius: 16px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 200px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 10px;
  }
`;

const HeaderRight = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    width: auto;
  }
`;

const FormIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const HeaderBox = () => {
  return (
    <HeaderContainer>
      <HeaderRight>
        <FormIconWrapper>
          <Link to="/new-form" style={{ textDecoration: "none" }}>
            <LeftButton>New Form</LeftButton>
          </Link>
        </FormIconWrapper>
        {/* Add additional buttons or components as needed */}
        <div className="box">{/* <LeftButton>New quizz</LeftButton> */}</div>
        <div className="box">{/* <LeftButton>Left Button</LeftButton> */}</div>
      </HeaderRight>
      <div className="header-left"></div>
    </HeaderContainer>
  );
};

export default HeaderBox;

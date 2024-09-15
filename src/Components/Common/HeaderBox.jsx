import React from "react";
import FormIcon from "@mui/icons-material/Assignment";
import { HeaderContainer, LeftButton, HeaderRight, FormIconWrapper } from "../../Styled/HeaderBoxStyles";
import { Link } from "react-router-dom";


const HeaderBox = () => {
  return (
    <HeaderContainer style={{paddingTop:"200px"}}>
      <HeaderRight>
        <FormIconWrapper>
        <Link to="/user-form" style={{ textDecoration: "none" }}>
            <LeftButton>Add New Form</LeftButton>
        </Link>
        </FormIconWrapper>
      </HeaderRight>
      <div className="header-left"></div>
    </HeaderContainer>
  );
};

export default HeaderBox;

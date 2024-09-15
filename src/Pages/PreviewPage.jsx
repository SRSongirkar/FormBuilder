import React, { useState } from "react";
import TitleBox from "../Components/Forms/TitleBox";
import Subform from "./Subform";
import { Button } from "@mui/material";
import Navbar from "../Components/Common/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const PreviewPage = () => {
  const location = useLocation();
  const handleSubmit = () => {
    console.log("Form submitted");
    alert("Data Submitted to server");
    localStorage.clear();
    const exitpreview = window.open("/user-form", "_self");
    exitpreview.focus();
  };
  const [Title, setTitle] = useState(
    localStorage.getItem("Title") || "Untitled Form"
  );
  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        {/* <TitleBox /> */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          marginTop={"6vh"}
          //bgcolor="background.paper"
          p={2}
        >
          <Box
            p={3}
            bgcolor="white"
            boxShadow={3}
            borderRadius={6}
            textAlign="center"
            width={{ xs: "90%", sm: "70%", md: "60%", lg: "40%" }}
          >
            <Box
              display={"flex"}
              mb={-8}
              justifyContent="flex-start"
              width="100%"
            >
              <>
                <Typography variant="body1">
                  <h2>{Title}</h2>
                </Typography>
              </>
            </Box>
            <Box mb={0}>
              {" "}
              <Subform />
            </Box>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              style={{ marginTop: "20px" }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default PreviewPage;

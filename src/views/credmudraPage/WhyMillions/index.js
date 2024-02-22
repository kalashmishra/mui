import { Box, Typography, keyframes } from "@mui/material";
import React from "react";
import SwiperComponent from "../../PersonalLoanForHomeRenovation/Swiper";
import logoImg from "../../../assets/images/CredmudraPageImages/logo.png";

const WhyMillions = () => {
  const shapeRotate = keyframes`
    0%, 100% {
      transform: translateY(0);
  }
  20%, 80% {
      transform: translateY(10px);
  }
  60% {
      transform: translateY(20px);
  }
    `;
  return (
    <Box sx={{ marginBottom: "5%", marginTop: { xs: "10%", sm: "0" } }}>
      <Box
        sx={{
          animationDuration: "3s",
          animationFillMode: "both",
          animationIterationCount: "infinite",
          animationName: `${shapeRotate}`,
          animationTimingFunction: "linear",
          transformOrigin: "center center",
          position: "relative",
          zIndex: "-1",
        }}
      >
        <img
          style={{
            position: "absolute",
            top: "0",
            left: "40px",
            width: "12%",
            transform: "rotate(330deg)",
          }}
          src={logoImg}
          alt="Credmudra"
        />
      </Box>
      <Box>
        <Box sx={{ paddingBottom: "5%" }}>
          <Typography
            sx={{
              color: "#243771",
              display: "flex",
              fontSize: { xs: "24px", md: "30px", lg: "50px" },
              fontFamily: "Inter",
              fontWeight: "900",
              letterSpacing: "0",
              margin: "auto",
              opacity: 1,
              textAlign: "center",
              textTransform: "capitalize",
              width: "70%",
            }}
          >
            Why Millions Of Indians Trust Credmudra For Short Term Loans?
          </Typography>
        </Box>
        <SwiperComponent />
      </Box>
    </Box>
  );
};

export default WhyMillions;

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  keyframes,
} from "@mui/material";
import React from "react";
import panAadharImg from "../../../assets/images/CredmudraPageImages/Paan-aadhar-Linking.jpg";
import pensionImg from "../../../assets/images/CredmudraPageImages/EPFO-Steps-to-apply-for-higher-pension.webp";
import logoImg from "../../../assets/images/CredmudraPageImages/logo.png";
import postOfficeImg from "../../../assets/images/CredmudraPageImages/Post-office-monthly-income-scheme.webp";
import rbiImg from "../../../assets/images/CredmudraPageImages/RBI-Flexi-saving-bond.webp";
import schemeImg from "../../../assets/images/CredmudraPageImages/Govt-Scheme-Vidhya-Laxmi-portal.webp";

const LatestBlog = () => {
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
  const bigBoxesImagesStyling = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "inset 0 -50px 36px -28px #00000059",
  };
  const bigBoxesHeadingStyling = {
    fontSize: { xs: "16px", md: "22px" },
    fontFamily: "Inter",
    fontWeight: "800",
    color: "#243771",
    letterSpacing: "0",
    opacity: "1",
    textAlign: "left",
  };
  const bigBoxesParaStyling = {
    fontSize: "14px",
    fontFamily: "Inter,sans-serif",
    color: "#191919",
    letterSpacing: "0",
    opacity: "1",
    textAlign: "left",
    width: "65%",
  };
  const bigBoxesSpanStyling = {
    color: " #64607d",
    fontSize: "14px",
    textAlign: "left",
    fontFamily: "Inter,sans-serif",
    opacity: 0.8,
    marginBottom:"20px"
  };
  const smallBoxesHeadingStyling = {
    fontSize: { xs: "16px", md: "18px" },
    fontFamily: "Inter",
    fontWeight: "600",
    color: "#243771",
    letterSpacing: "0",
    opacity: "1",
    textAlign: "left",
  };
  const smallBoxesImageStyling = {
    width: "100%",
    borderRadius: "10px",
    boxShadow: "inset 0 -50px 36px -28px #00000059",
    maxHeight: "108px",
    minHeight: "108px",
    objectFit: "cover",
  };
  const bottomBorderStyling = {
    border: "2px solid #f7d64a",
    borderRadius: "5px",
    marginBottom: "16px",
    marginLeft: "14px",
    marginTop: "20px",
    // width: "95%",
  };
  return (
    <Box sx={{marginTop:"5%"}}>
      <Box
        sx={{
          animationDuration: "3s",
          animationFillMode: "both",
          animationIterationCount: "infinite",
          animationName: `${shapeRotate}`,
          animationTimingFunction: "linear",
          transformOrigin: "center center",
          position: "relative",
          zIndex:'-1'
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
      <Container maxWidth={"xl"} sx={{ padding: { md: "0 7%" } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            margin: { xl: "70px 0 50px" },
            marginBottom: { xs: "30px", lg: "0" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "26px", lg: "40px" },
              fontFamily: "Inter",
              fontWeight: "600",
              color: "#243771",
              letterSpacing: "0",
              opacity: "1",
              textAlign: "left",
              marginBottom:"20px"
            }}
          >
            Our Latest Blog Posts
          </Typography>
          <Button
            sx={{
              "&:hover": {
                backgroundColor: "#243771",
                color: "#f7d64a",
              },
              padding: { xs: "12px 34px 12px" },
              boxShadow: "0px 3px 6px #00000029",
              borderRadius: "10px",
              backgroundColor: "#f7d64a",
              color: "#243771",
              marginTop: "10px",
              fontWeight: "600",
              transition: ".4s all ease-in-out",
              textTransform: "capitalize ",
              fontSize: { xs: "16px" },
              fontFamily: "Inter",
            }}
          >
            See All Blog Post
          </Button>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={7} sx={{ display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: { sm: "20px" },
                alignItems: "center",
                justifyContent: "center",
            
              }}
            >
              <Box sx={{ width: { xs: "100%", sm: "50%" }, height:"100%" }}>
                <Box>
                  <img
                    alt="pan-aadhar"
                    src={panAadharImg}
                    style={{
                      ...bigBoxesImagesStyling,
                    }}
                  />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ ...bigBoxesSpanStyling }}>
                    June 12, 2023
                  </Typography>
                  <Typography sx={{ ...bigBoxesSpanStyling }}>
                    Pancard
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      ...bigBoxesHeadingStyling,
                    }}
                  >
                    PAN And Aadhar Card Linking
                  </Typography>
                  <Typography
                    sx={{
                      ...bigBoxesParaStyling,
                    }}
                  >
                    If your PAN card becomes invalid, you will not be able to
                    get all these financial services
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ width: { xs: "100%", sm: "50%" }, height:"100%" }}>
                <Box>
                  <img
                    alt="pension-img"
                    src={pensionImg}
                    style={{
                      ...bigBoxesImagesStyling,
                    }}
                  />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ ...bigBoxesSpanStyling }}>
                    June 5, 2023
                  </Typography>
                  <Typography sx={{ ...bigBoxesSpanStyling }}>
                    Saving Schemes
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      ...bigBoxesHeadingStyling,
                    }}
                  >
                    EPFO Higher Pension Scheme
                  </Typography>
                  <Typography
                    sx={{
                      ...bigBoxesParaStyling,
                    }}
                  >
                    Circulars on Employees' Provident Fund declared on December
                    29, 2022
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={5}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
              <Box sx={{ width: "35%" }}>
                <img
                  src={postOfficeImg}
                  alt="post-office"
                  style={{
                    ...smallBoxesImageStyling,
                  }}
                />
              </Box>
              <Box sx={{ width: "65%" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ ...bigBoxesSpanStyling }}>
                    May 25, 2023
                  </Typography>
                  <Typography sx={{ ...bigBoxesSpanStyling }}>
                    Saving schemes
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      ...smallBoxesHeadingStyling,
                    }}
                  >
                    Post Office Monthly Income Scheme
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                ...bottomBorderStyling,
              }}
            ></Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
              <Box sx={{ width: "35%" }}>
                <img
                  src={schemeImg}
                  alt="post-office"
                  style={{
                    ...smallBoxesImageStyling,
                  }}
                />
              </Box>
              <Box sx={{ width: "65%" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ ...bigBoxesSpanStyling }}>
                    May 25, 2023
                  </Typography>
                  <Typography sx={{ ...bigBoxesSpanStyling }}>
                    Saving schemes
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      ...smallBoxesHeadingStyling,
                    }}
                  >
                    All You Need Know About Vidya Lakshmi Loan
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                ...bottomBorderStyling,
              }}
            ></Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
              <Box sx={{ width: "35%" }}>
                <img
                  src={rbiImg}
                  alt="post-office"
                  style={{
                    ...smallBoxesImageStyling,
                  }}
                />
              </Box>
              <Box sx={{ width: "65%" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ ...bigBoxesSpanStyling }}>
                    May 22, 2023
                  </Typography>
                  <Typography sx={{ ...bigBoxesSpanStyling }}>
                    Saving schemes
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      ...smallBoxesHeadingStyling,
                    }}
                  >
                    RBI Floating saving bond  Full Details Along with
                    Calculation Process
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LatestBlog;

import { Box, Container, Grid, Typography, keyframes } from "@mui/material";
import React from "react";
import waveimg from "../../../assets/images/CredmudraPageImages/waveimg.svg";
import bannerimg from "../../../assets/images/CredmudraPageImages/home-banner.png";
import { Link } from "react-router-dom";
import landingpageimg1 from "../../../assets/images/CredmudraPageImages/landing-page-img1.svg";
import landingpageimg2 from "../../../assets/images/CredmudraPageImages/landing-page-img2.svg";
import landingpageimg3 from "../../../assets/images/CredmudraPageImages/landing-page-img3.svg";
import landingpageimg4 from "../../../assets/images/CredmudraPageImages/landing-page-img4.svg";
import GetMatchedButton from "../../../components/GetMatchedButton";

const translateYAnimation = keyframes`
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
const ShortTerm = () => {
  const linkData = [
    {
      to: "/personal-loan",
      imageSrc: landingpageimg1,
      label: "Personal Loan",
    },
    {
      to: "/business-loan",
      imageSrc: landingpageimg2,
      label: "Business Loan",
    },
    {
      to: "/personalloanfordebt",
      imageSrc: landingpageimg3,
      label: "Debt Consolidation",
    },
    {
      to: "/personalloanformedical",
      imageSrc: landingpageimg4,
      label: "Medical",
    },
  ];
  return (
    <Box sx={{ position: "relative" }}>
      <img
        alt="loading"
        src={waveimg}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "50%",
          zIndex: "-1",
        }}
      />
      <Container maxWidth={"xl"} sx={{ padding: { md: "0 7%" } }}>
        <Grid
          container
          sx={{
            minHeight: { xs: "0vh", sm: "100vh" },

            display: "flex",
            flexDirection: { xs: "column-reverse", sm: "column", md: "row" },
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-start", lg: "flex-end" },
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                marginTop: { sm: "10%", md: "0" },
              }}
            >
              <Box
                sx={{
                  padding: { xs: "16px", md: "0" },
                }}
              >
                <Typography
                  gutterBottom
                  sx={{
                    fontFamily: "Inter",
                    color: "#243771",
                    fontSize: {
                      xs: "26px",
                      sm: "34px",
                      md: "34px",
                      lg: "45px",
                    },
                    lineHeight: "1.2",
                    fontWeight: "900",
                    margin: "30px 0",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Your Short Term Loan Is Just A Match Away!
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    color: "#243771",
                    fontSize: { xs: "12px", sm: "18px", md: "22px" },
                    marginBottom: "14px",
                    fontWeight: { xs: "500", md: "700" },
                    margin: { md: "0 0 30px" },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  On a mission of financial inclusion for every indian
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  marginBottom: "20px",
                  justifyContent: { xs: "center", md: "flex-start" },
                  alignItems: "center",
                }}
              >
                {linkData.map((link, index) => (
                  <Box
                    key={index}
                    sx={{
                      transition: "all .3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <Link
                      to={link.to}
                      style={{
                        color: "#404040",
                        display: "inline-block",
                        textDecoration: "none",
                      }}
                    >
                      <Box
                        sx={{
                          alignItems: "center",
                          background: "#243771",
                          border: "1px solid #cdced6",
                          borderRadius: "20px",
                          boxShadow: "4px 8px 20px #5cb46a4f",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-around",
                          margin: "4px",
                          height: { xs: "88px", md: "100px" },
                          padding: { xs: "8px", sm: "4px" },
                          width: { xs: "70px", sm: "100px" },
                        }}
                      >
                        <Box
                          sx={{
                            width: {
                              xs: "40%",
                              md: "60%",
                              textAlign: "center",
                            },
                          }}
                        >
                          <img
                            alt={`get ${link.label}`}
                            style={{ maxWidth: "100%", height: "auto" }}
                            src={link.imageSrc}
                          />
                        </Box>
                        <Typography
                          sx={{
                            fontSize: { xs: "9px", md: "12px" },
                            fontFamily: "Inter,sans-serif",
                            fontWeight: "700",
                            textAlign: "center",
                            color: "#ffffff",
                            textDecoration: "none !important",
                          }}
                        >
                          {link.label}
                        </Typography>
                      </Box>
                    </Link>
                  </Box>
                ))}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <GetMatchedButton />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", lg: "flex-start" },
              alignItems: "center",
              padding: { md: "32px", lg: "0" },
            }}
          >
            <Box
              sx={{
                marginTop: { xs: "30%", sm: "0" },
                width: { sm: "70%", md: "100%" },
                animation: `${translateYAnimation} 5s linear infinite`,
                transformOrigin: "center center",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src={bannerimg}
                alt="loading"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ShortTerm;

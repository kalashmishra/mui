import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import personalLoanEligibilityimg from "../../../assets/images/PersonalLoanEligibility/pl-eligibility-banner-img.webp";

const ApplyOnline = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#10162c",
        overflow: "hidden",
        position: "relative",
        marginTop: "2%",
        marginBottom:"5%"
      }}
    >
      <Box sx={{ padding: "60px 50px 40px" }}>
        <Grid container alignItems={"center"} spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: " #fff!important",
                fontSize: { xs: "24px", sm: "40px" },
                fontWeight: "900",
                lineHeight: "1.4",
                fontFamily: "Inter,sans-serif",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Apply For A Personal Loan Online With{" "}
              <Typography
                component={"span"}
                sx={{
                  color: "#f7d64a",
                  fontSize: { xs: "24px", sm: "40px" },
                  fontWeight: "900",
                  lineHeight: "1.4",
                  fontFamily: "Inter,sans-serif",
                }}
              >
                Minimum Documentation
              </Typography>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: {xs:"center", md: "space-between", lg: "space-around" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent:"center",
              }}
            >
              <Button
                sx={{
                  "&:hover": {
                    backgroundColor: "#243788",
                    color: "#F7D64A",
                  },
                  padding: "14px 30px",
                  boxShadow: "0px 3px 6px #00000029",
                  borderRadius: "10px",
                  border: "1px solid #F7D64A",
                  backgroundColor: "#F7D64A",
                  color: "#243788",
                  marginLeft: { md: "8px" },
                  fontWeight: "900",
                  transition: ".4s all ease-in-out",
                  textTransform: "capitalize ",
                }}
              >
                Apply Now
              </Button>
            </Box>

            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <img
                src={personalLoanEligibilityimg}
                alt="personal-loan-eligibility-img"
                style={{
                  position: "absolute",
                  maxWidth: "319px",
                  bottom: "0",
                  right: "-4%",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ApplyOnline;

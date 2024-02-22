import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import waveimg from "../../../assets/images/CreditScoreImages/waveimg.svg";
import Smillingimg from "../../../assets/images/CreditScoreImages/smiling-arab-guy-using-phone-credit-card-home.png";
import Chart from "../../../assets/images/CreditScoreImages/chart-histogram (1).png";
import Percent from "../../../assets/images/CreditScoreImages/Group 10134.png";
import Unlock from "../../../assets/images/CreditScoreImages/unlock.png";
import GetFreeCreditButton from "../../../components/GetFreeCreditButton";

const InstentlyCheck = () => {
  return (
    <>
        <Grid
          container
          sx={{
            minHeight: { xs: "0vh", sm: "100vh" },
            padding: { xs: "16px", sm: "10px", md: "32px" },
            display: "flex",
            flexDirection: { xs: "column-reverse", sm: "row" },
          }}
        >
          <Grid item xs={12} sm={6}>
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

            <Box
              sx={{
                display: "flex",
                minHeight: { sm: "100vh" },
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  padding: { sm: "16px", xl: "0 0 0 112px" },
                  width: { md: "80%", lg: "90%", xl: "90%" },
                  textAlign: "left",
                  // height:{xs:"50vh"}
                }}
              >
                <Typography
                  // variant="h3"
                  gutterBottom
                  sx={{
                    fontFamily: "Inter",
                    color: "#243771",
                    // maxWidth:{xs:"400px",sm:"540px"},
                    //   maxWidth: "700px",
                    fontSize: {
                      xs: "24px",
                      sm: "28px",
                      md: "34px",
                      lg: "38px",
                    },
                    lineHeight: "1.2",
                    fontWeight: "900",
                    paddingRight: { md: "80px" },
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  Instantly Check Credit Score, Seize Better Opportunities With
                  Credmudra's Security.
                </Typography>
                <Typography
                  sx={{
                    font: "normal normal normal 18px/29px Inter",
                    color: "#623c2b",
                    marginBottom: "14px",
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  Get your free credit score confidently and take control of
                  your financial future.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    // justifyContent: "center",
                  }}
                >
                  <List
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      gap: { xs: "10px", sm: "0px" },
                    }}
                  >
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <img src={Chart} alt="chartimg" />
                      </ListItemIcon>
                      <ListItemText primary="Get Detailed Insights" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <img src={Percent} alt="percentage" />
                      </ListItemIcon>
                      <ListItemText primary="Access Better Deals" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <img src={Unlock} alt="unlock" />
                      </ListItemIcon>
                      <ListItemText primary="It’s 100% Secure" />
                    </ListItem>
                  </List>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    //   alignItems:  { xs: "center", sm: "left" },
                    justifyContent: { xs: "center", sm: "left" },
                  }}
                >
                  <GetFreeCreditButton />
                </Box>
              </Box>
            </Box>
          </Grid>
          {/* Right Side */}
          <Grid item xs={12} sm={6} display={{ xs: "flex", sm: "flex" }}>
            <Box
              sx={{
                display: { xs: "flex", sm: "flex", md: "flex", xl: "flex" },
                // minHeight: {xs:"0vh",sm:"100vh"},
                justifyContent: "center",
                flexDirection: "column",
                paddingY: "3rem",
              }}
            >
              <img
                src={Smillingimg}
                style={{
                  width: "100%",
                  height: "auto",
                  // marginTop: "2%",
                }}
                alt="loading"
              />
            </Box>
          </Grid>
        </Grid>
    </>
  );
};

export default InstentlyCheck;

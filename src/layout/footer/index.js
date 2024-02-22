import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import credmudraLogoImg from "../../assets/images/credmudra_logo_new.png";
import startupImg from "../../assets/images/FooterImages/footer_startup.png";
import StarIcon from "@mui/icons-material/Star";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  const listItemStyling = {
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "Inter,sans-serif",
    fontWeight: "700",
    paddingLeft: "0",
  };
  const styles = {
    fontWeight: 300,
    letterSpacing: "0px",
    color: "##666666",
    opacity: 0.5,
    paddingLeft: "8px",
    // height: "50px",
    bordeColor: "#141414",
    borderRadius: 0,
    // paddingLeft: "8px",
    textAlign: "center",
    backgroundColor: "#ffffff",
    // width:"100%"
  };
  return (
    <Box>
      <Box sx={{ backgroundColor: "#141414", padding: "45px 15px 45px 0" }}>
        <Container maxWidth={"xl"}>
          <Grid
            container
            spacing={2}
            sx={{
              padding: { md: "0 7%" },
              display: "flex",
              flexDirection: { xs: "column", sm: "row", flexWrap: "wrap" },
            }}
          >
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <Box>
                <Box sx={{ marginBottom: "28px" }}>
                  <img src={credmudraLogoImg} alt="Credmudra"  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#f7d64a",
                    fontSize: "25px",
                    fontFamily: "Inter",
                    fontWeight: "900",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#f7d64a",
                      fontSize: "20px",
                      fontFamily: "Inter",
                      fontWeight: "900",
                    }}
                  >
                    4.9
                  </Typography>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </Box>
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: "14px",
                    fontFamily: "Inter",
                    fontWeight: "700",
                    marginBottom: "30px",
                  }}
                >
                  Rated by our customer
                </Typography>
                <Box>
                  <Typography
                    sx={{
                      color: "#ffffff",
                      fontSize: "18px",
                      fontFamily: "Inter",
                      fontWeight: "700",
                      marginBottom: "10px",
                    }}
                  >
                    Follow Us On-
                  </Typography>
                  <Box sx={{ display: "flex", gap: "10px", color: "#f7d64a" }}>
                    <FacebookOutlinedIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                    <YouTubeIcon />
                    <LinkedInIcon />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={2}>
              <Box>
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: "18px",
                    fontFamily: "Inter",
                    fontWeight: "700",
                    marginBottom: "10px",
                  }}
                >
                  Our Company
                </Typography>
                <List sx={{ paddingTop: "16px" }}>
                  <ListItem sx={{ ...listItemStyling }}>About Us</ListItem>
                  <ListItem sx={{ ...listItemStyling }}>
                    Terms and Condition
                  </ListItem>
                  <ListItem sx={{ ...listItemStyling }}>
                    Privacy Policy
                  </ListItem>
                  <ListItem sx={{ ...listItemStyling }}>Blog</ListItem>
                  <ListItem sx={{ ...listItemStyling }}>Careers</ListItem>
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <Box>
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: "18px",
                    fontFamily: "Inter,sans-serif",
                    fontWeight: "700",
                  }}
                >
                  Contact With Us
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: "12px",
                    fontFamily: "Inter,sans-serif",
                    fontWeight: "700",
                    padding: "20px 30px 20px 0",
                  }}
                >
                  Mumbai Location: <br />
                  912 SURESHWARI TECHNO IT PARK PREMISES VILLAGE EKSAR, LINK
                  ROAD BORIVALI (W) Mumbai, 400092
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: "12px",
                    fontFamily: "Inter,sans-serif",
                    fontWeight: "700",
                    padding: "20px 30px 20px 0",
                  }}
                >
                  Bhopal Location: <br />B NO. 8 NIRUPAM, PH-II, NIRUPAM ESTATE,
                  AHMEDPUR KALAN, HUZUR, BHOPAL, Madhya Pradesh, India, 462026
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: "12px",
                    fontFamily: "Inter,sans-serif",
                    fontWeight: "700",
                    padding: "20px 30px 20px 0",
                  }}
                >
                  Contact Email: <br />
                  Support@credmudra.com
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Box>
                <img
                  src={startupImg}
                  alt="Startupindia"
                  style={{ width: "100%", height: "auto" }}
                />
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: "18px",
                    fontFamily: "Inter,sans-serif",
                    fontWeight: "700",
                    padding: "0 20px 10px 0",
                  }}
                >
                  Join Our Newsletter
                </Typography>

                <Box>
                  <Box
                    sx={{
                      maxWidth: "680px",
                      height: "50px",
                      margin: "10px 0",
                      textAlign: "center",
                      position: "relative",
                      zIndex: 2,
                      paddingLeft: "0px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        width: "100%",
                      }}
                    >
                      <TextField
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        sx={{ "& input": styles }}
                      />

                      <Button
                        type="submit"
                        className="btn"
                        id="footer_subscriber_submit"
                        sx={{
                          // width:"100%",
                          height: "55px",
                          borderRadius: "0",
                          color: "#243771",
                          fontWeight: 800,
                          background: "#f7d64a 0% 0% no-repeat padding-box",
                          fontSize: { xs: "12px", sm: "14px" },
                          textTransform: "uppercase",
                          transition: "0.4s all ease-in-out",
                          marginLeft: "1px",
                          "&:hover": {
                            background: "#243771",
                            color: "#f7d64a",
                          },
                        }}
                      >
                        Subscribe Now
                      </Button>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      color: "#ffffff",
                      fontSize: "18px",
                      fontFamily: "Inter,sans-serif",
                      fontWeight: "300",
                      padding: "20px 20px 20px 0",
                    }}
                  >
                    <Typography sx={{ color: "#ffffff" }}>
                      * Will send you weekly updates for your better finance
                      management.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ borderTop: "1px solid #f7d64a" }}>
        <Container maxWidth={"xl"}>
          <Box textAlign="center" sx={{ width: "100%", margin: "0 0 auto" }}>
            <Typography
              sx={{
                padding: "10px",
                color: "#404040",
                fontSize: "16px",
                fontFamily: "Inter,sans-serif",
                fontWeight: "300",
              }}
            >
              Copyright @ Credmudra 2023. All Rights Reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;

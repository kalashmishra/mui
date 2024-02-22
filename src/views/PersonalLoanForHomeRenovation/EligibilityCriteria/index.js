import React from "react";
import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";
import findoutimg from "../../../assets/images/PersonalLoanForTravelImages/findout.png";

const EligibilityCriteria = () => {
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "10px",
    marginRight: "10px",
  };
  return (
    <Box
      sx={{
        background: "#243771",
        overflow: "hidden",
        padding: "65px 0",
        position: "relative",
      }}
    >
      <img
        src={findoutimg}
        alt="Credmudra logo"
        style={{
          left: "5%",
          maxWidth: "530px",
          opacity: ".6",
          position: "absolute",
          top: "0",
        }}
      />
      <Grid container sx={{ padding: { xs: "20px", md: "48px" } }}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            alignItems: { sm: "center" },
            justifyContent: { xs: "flex-start" },
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: { sm: "100%", md: "55%" },
            }}
          >
            <Typography
              sx={{
                color: "#f7d64a",
                fontSize: { xs: "", sm: "36px" },
                fontWeight: "900",
                marginBottom: "25px",
                lineHeight: "1.1",
                fontFamily: "Inter",
              }}
            >
              Eligibility Criteria For A Personal Loan For Home Renovation
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "17px", sm: "20px" },
                fontWeight: "200",
                fontFamily: "Inter",
                marginBottom: "20px",
                color: "#fff",
              }}
            >
              In order to get a personal loan, borrowers will have to fulfil a
              set of eligibility requirements. Although, these parameters vary
              from one lender to another, here is a basic list of eligibility
              criteria set by most lending partners in India:
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            alignItems: { xs: "flex-start" },
            justifyContent: { xs: "flex-start", md:"center" },
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: { xl: "90%" },
              color: "#fff",

            }}
          >
            <List>
              <ListItem
                sx={{
                  fontSize: { xs: "16px", sm: "18px" },
                  fontWeight: "400",
                  fontFamily: "Inter",
                  padding: 0,
                }}
              >
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography
                  sx={{
                    color: "#f7d64a",
                    fontWeight: "700",

                    fontFamily: "Inter",
                    fontSize: { xs: "16px", sm: "18px" },
                    // display: "inline",
                  }}
                  component={"span"}
                >
                  Nationality :
                </Typography>{" "}
                Indian
              </ListItem>
              <ListItem
                sx={{
                  fontSize: { xs: "16px", sm: "18px" },
                  fontWeight: "400",
                  fontFamily: "Inter",
                  padding: 0,
                }}
              >
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography
                  sx={{
                    color: "#f7d64a",
                    fontWeight: "700",

                    fontFamily: "Inter",
                    fontSize: { xs: "16px", sm: "18px" },
                    // display: "inline",
                  }}
                  component={"span"}
                >
                  Employment :
                </Typography>{" "}
                Both salaried and self-employed individuals
              </ListItem>
              <ListItem
                sx={{
                  fontSize: { xs: "16px", sm: "18px" },
                  fontWeight: "400",
                  fontFamily: "Inter",
                  padding: 0,
                }}
              >
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography
                  sx={{
                    color: "#f7d64a",
                    fontWeight: "700",

                    fontFamily: "Inter",
                    fontSize: { xs: "16px", sm: "18px" },
                    // display: "inline",
                  }}
                  component={"span"}
                >
                  Credit Score :
                </Typography>{" "}
                Minimum 685
              </ListItem>
              <ListItem
                sx={{
                  fontSize: { xs: "16px", sm: "18px" },
                  fontWeight: "400",
                  fontFamily: "Inter",
                  // display: "inline",
                  padding: 0,
                }}
                components={"span"}
              >
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography
                  sx={{
                    color: "#f7d64a",
                    fontWeight: "700",
                    fontFamily: "Inter",
                    fontSize: { xs: "16px", sm: "18px" },
                    // display: "inline",
                  }}
                  component={"span"}
                >
                  Monthly Income :
                </Typography>
                More than Rs.25,000 per month
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EligibilityCriteria;

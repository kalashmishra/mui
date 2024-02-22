import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import GetMatchedButton from "../../../components/GetMatchedButton";
import { FiberManualRecord } from "@mui/icons-material";

const DocumentRequired = () => {
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "10px",
    marginRight: "10px",
    // marginTop:"-10px"
  };

  return (
    <Box>
      <Container maxWidth={"xl"} sx={{ padding: "60px 0px 50px" }}>
        <Grid container sx={{ padding: { xs: "20px", md: "48px" } }}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: { xs: "center", sm: "flex-start" },
                justifyContent: { xs: "center", sm: "flex-start" },
                flexDirection: "column",
                // padding:{xs:"1rem 5rem 1rem"}
              }}
            >
              <Box
                sx={{
                  width: { sm: "90%", xl: "90%" },
                  // margin: { xl: "0px 65px 0px 0px" },
                }}
                textAlign={{ xs: "center", sm: "left" }}
              >
                <Typography
                  sx={{
                    color: "#243771",
                    fontSize: { xs: "24px", sm: "30px", lg: "36px" },
                    fontFamily: "Inter",
                    fontWeight: "900",
                    lineHeight: "1.1",
                    margin: "0 0 14px",
                  }}
                >
                  Documents Required For A Personal Loan For Home Renovation
                </Typography>
                <Typography
                  sx={{
                    color: "#404040",
                    fontSize: { xs: "16px", sm: "18px" },
                    fontFamily: "Inter",
                    lineHeight: "1.5",
                    margin: "0 0 24px",
                    fontWeight: "500",
                  }}
                >
                  Here are the documents you will need to submit while applying
                  for a personal loan for home renovation:
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "center", sm: "flex-start" },
                  }}
                >
                  <GetMatchedButton />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box
              sx={{
                width: { xl: "90%" },
              }}
            >
              <List>
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
                      color: "#243771",
                      fontWeight: "900",
                      fontFamily: "Inter",
                      fontSize: { xs: "16px", sm: "18px" },
                      // display: "inline",
                    }}
                  >
                    Identity proof-{" "}
                    <Typography component={"span"} sx={{ fontWeight: "600" }}>
                      Voter ID Card, Passport, Driving License, Aadhaar Card,
                      PAN Card, etc.
                    </Typography>
                  </Typography>
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
                      color: "#243771",
                      fontWeight: "900",
                      fontFamily: "Inter",
                      fontSize: { xs: "16px", sm: "18px" },
                      // display: "inline",
                    }}
                  >
                    Residential proof-{" "}
                    <Typography component={"span"} sx={{ fontWeight: "600" }}>
                      Voter ID Card, Utility bills(Electricity and Water Bill),
                      etc.
                    </Typography>
                  </Typography>
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
                      color: "#243771",
                      fontWeight: "900",
                      fontFamily: "Inter",
                      fontSize: { xs: "16px", sm: "18px" },
                      // display: "inline",
                    }}
                  >
                    Income proof-{" "}
                    <Typography component={"span"} sx={{ fontWeight: "600" }}>
                      Audited financial records(for self-employed individuals),
                      Salary slip(for salaried individuals), Bank account
                      statement
                    </Typography>
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DocumentRequired;

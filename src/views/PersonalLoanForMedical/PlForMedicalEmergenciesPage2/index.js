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

const PlForMedicalEmergenciesPage2 = () => {
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "15px",
    marginRight: "10px",
  };
  const ListItemStyling = {
    color: "#404040",
    fontSize: { xs: "16px", sm: "20px" },
    fontWeight: "900",
    fontFamily: "Inter",
  };
  return (
    <Box bgcolor="#fcefb8">
      <Container
        sx={{ display: { xs: "block", padding: "60px 0px 50px" } }}
        maxWidth={"xl"}
      >
        <Grid
          container
          alignItems="center"
          // spacing={3}
          sx={{ padding: { xs: "20px", md: "48px" } }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              alignItems: { xs: "center" },
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <Box sx={{ width: { sm: "100%", md: "80%", lg: "70%" } }}>
              <Typography
                sx={{
                  textAlign: { xs: "center", sm: "left" },
                  fontSize: { xs: "24px", sm: "40px" },
                  fontFamily: "Inter",
                  color: "#243771",
                  fontWeight: "900",
                  lineHeight: { xs: "1.3", md: "1.1" },
                  margin: { xs: "0px 0px 24px" },
                  // padding:{xl:"0px 80px 0px"}
                }}
              >
                Personal Loan For A Medical Emergency
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: { xs: "center", sm: "flex-start" },
                  justifyContent: { xs: "center", sm: "flex-start" },
                }}
              >
                <GetMatchedButton />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              alignItems: { xs: "center" },
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <Box>
              <Typography
                sx={{
                  textAlign: { xs: "left", sm: "left" },
                  fontSize: { xs: "15px", sm: "20px" },
                  fontFamily: "Inter",
                  color: "#404040",
                  fontWeight: "300",
                  lineHeight: { xs: "1.3", sm: "1.5" },
                  margin: { xs: "0px 0px 24px" },
                }}
              >
                A medical loan is a form of unsecured personal loan, i.e.,
                collateral-free, that can be used for health-related emergencies
                or any urgent medical needs or health concerns. This type of
                credit line provides financial assistance to cover expenses that
                may arise during various medical emergencies, such as:
              </Typography>
              <List>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography sx={{ ...ListItemStyling }}>Accidents</Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography sx={{ ...ListItemStyling }}>
                    Dental emergencies
                  </Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography sx={{ ...ListItemStyling }}>
                    Medical prescription bills
                  </Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography sx={{ ...ListItemStyling }}>
                    Cosmetic procedures
                  </Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography sx={{ ...ListItemStyling }}>
                    Prolonged treatments{" "}
                  </Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography sx={{ ...ListItemStyling }}>
                    Hospitalisation bills{" "}
                  </Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography sx={{ ...ListItemStyling }}>
                    Chemotherapy{" "}
                  </Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography sx={{ ...ListItemStyling }}>
                    Surgeries and bypass surgeries{" "}
                  </Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography sx={{ ...ListItemStyling }}>
                    Other similar treatments{" "}
                  </Typography>
                </ListItem>
              </List>
              <Typography
                sx={{
                  textAlign: { xs: "left", sm: "left" },
                  fontSize: { xs: "15px", sm: "20px" },
                  fontFamily: "Inter",
                  color: "#404040",
                  fontWeight: "300",
                  lineHeight: { xs: "1.3", md: "1.1" },
                  // margin: { xs: "0px 0px 24px" },
                }}
              >
                Furthermore, there may be medical expenses that insurance
                policies do not cover. In such cases, a medical loan can be a
                lifesaver, providing access to financial assistance to help meet
                the expenses of medical emergencies.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PlForMedicalEmergenciesPage2;

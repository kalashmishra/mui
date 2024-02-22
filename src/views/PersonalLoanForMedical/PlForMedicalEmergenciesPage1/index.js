import { Box, Checkbox, Grid, Typography } from "@mui/material";
import React from "react";
import waveimg from "../../../assets/images/PersonalLoanForMedicalImages/waveimg.svg";
import medicalemergenciesimg from "../../../assets/images/PersonalLoanForMedicalImages/plformedicalimg.png";
import Section1Form from "../../../components/Section1Form";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const PersonalLoanForMedicalEmergenciesPage1 = () => {
  return (
    <Box>
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

      <Grid
        container
        sx={{
          padding: { xs: "16px", md: "32px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              maxWidth: "540px",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Box>
              <Typography
                gutterBottom
                sx={{
                  fontFamily: "Inter",
                  color: "#243771",
                  // maxWidth:{xs:"400px",sm:"540px"},
                  // maxWidth: "540px",
                  fontSize: { xs: "26px", sm: "34px", md: "34px", lg: "38px" },
                  lineHeight: "1.2",
                  fontWeight: "900",
                }}
              >
                Personal Loan For Medical Emergency
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter,sans-serif",
                  color: "#10162c",
                  marginBottom: "14px",
                  fontSize: { xs: "16px", sm: "18px" },
                  // fontWeight: "300",
                }}
              >
                Medical emergencies can be a source of immense anxiety,
                particularly if you are caught off-guard.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: { xs: "16px", sm: "18px" },
                  color: "#10162c",
                  marginBottom: "14px",
                  fontWeight: "300",
                }}
              >
                In such situations, CredMudra’s personal medical loan can help
                you and your loved ones stay protected regardless of your
                financial circumstance.
              </Typography>
            </Box>
            <Box sx={{ width: { sm: "90%", md: "100%" } }}>
              <Typography
                sx={{
                  marginBottom: "14px",
                  color: "#404040",
                  fontSize: "14px",
                  fontFamily: "Inter",
                }}
              >
                Enter your 10 digit mobile number to proceed
              </Typography>
              <Section1Form />
            </Box>
            <Box display="flex" alignItems="flex-start" sx={{width:"90%"}}>
              <Checkbox {...label} defaultChecked sx={{ marginTop: "12px" }} />
              <Typography
                marginTop="20px"
                textAlign="justify"
                sx={{
                  color: "#999",
                  fontSize: "13px",
                  lineHeight: "1.5",
                  fontFamily: "Inter",
                }}
              >
                By continuing, I agree to Credmudra's Privacy Policy and Terms &
                Conditions and receive communication from Credmudra via SMS,
                E-mail, and WhatsApp.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} display={{ xs: "none", sm: "flex" }}>
          <Box
            sx={{
              display: { xs: "none", sm: "flex", md: "flex", xl: "flex" },
              // minHeight: {xs:"0vh",sm:"100vh"},
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <img
              src={medicalemergenciesimg}
              style={{
                width: "100%",
                height: "auto",
              }}
              alt="loading"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalLoanForMedicalEmergenciesPage1;

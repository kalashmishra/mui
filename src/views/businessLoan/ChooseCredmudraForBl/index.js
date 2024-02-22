import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ChooseCredmudraForBlImg from "../../../assets/images/BusinessLoanImages/choosecredmudraforbl.png";
import GetMatchedButton from "../../../components/GetMatchedButton";

const ChooseCredmudraForBl = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const AccHeading = {
    color: "#243771",
    fontSize: { xs: "18px", md: "22px" },
    fontFamily: "Inter",
    fontWeight: "900",
  };
  const AccPara = {
    color: "#222",
    fontFamily: "Inter",
    fontSize: { xs: "16px" },
  };

  const CheckCircle = {
    // marginTop: "6px",
    color: "black",
    marginRight: "10px",
  };
  return (
    <>
      <Container maxWidth={"xl"} sx={{ padding: "60px 0px 50px" }}>
        <Grid
          container
          // sx={{ padding: { xs: "3rem .5rem 3rem", sm: "1rem", md: "2rem" } }}
          sx={{ padding: { xs: "10px", md: "32px" } }}
        >
          {/* Left Side */}
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "left",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  // padding: {
                  //   // xs:"3rem 1rem 1rem 1.3rem",
                  //   sm: "0 0 0 1rem",
                  //   // md:"3rem",
                  //   lg: "3rem 0 0 0",
                  //   xl: "3rem 0 0 13rem",
                  // },
                  width: { sm: "90%", xl: "100%" },
                }}
              >
                <Typography
                  sx={{
                    textAlign: { sm: "left" },
                    color: "#243771",
                    fontSize: { xs: "24px", sm: "32px", lg: "34px" },
                    fontFamily: "Inter",
                    fontWeight: "800",
                    lineHeight: "1.1",
                    margin: "0 0 18px",
                  }}
                >
                  Choose Credmudra For The Best Business Loan
                </Typography>
                <Accordion
                  elevation={0}
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  sx={{
                    backgroundColor: "transparent",
                    marginTop: "20px",
                    // padding: "0px 0px 10px 0px",
                  }}
                >
                  <AccordionSummary
                    // sx={{display:'flex',alignItems:'center'}}
                    expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    sx={{ padding: 0 }}
                  >
                    <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
                    <Typography sx={{ ...AccHeading }}>
                      Prompt Loan Disbursal
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      With us, the TAT of borrowing a business loan is reduced
                      to meet your financial requirements without wasting time.
                      We promise to sanction and disburse the loan amount the
                      same day.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  elevation={0}
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                  sx={{
                    backgroundColor: "transparent",
                    // padding: "0px 0px 10px 0px",
                  }}
                >
                  <AccordionSummary
                    sx={{ display: "flex", alignItems: "center", padding: 0 }}
                    expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
                    <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                    <Typography sx={{ ...AccHeading }}>
                      Loan Match Making
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      Just apply for the loan, submit necessary papers and
                      relax. We will do the rest. Finding the right lending
                      partner that matches your requirements is what we do. And
                      we do it best.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  elevation={0}
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                  sx={{
                    // padding: "0px 0px 10px 0px",
                    backgroundColor: "transparent",
                  }}
                >
                  <AccordionSummary
                    sx={{ display: "flex", alignItems: "center", padding: 0 }}
                    expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                    <Typography sx={{ ...AccHeading }}>
                      Easy Application
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      Our application process is user-friendly and seamless. You
                      only need to furnish your mobile phone number, required
                      details and mention your loan requirements.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  elevation={0}
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                  sx={{
                    backgroundColor: "transparent",
                    // padding: "0px 0px 10px 0px",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
                    aria-controls="panel4d-content"
                    id="panel4d-header"
                    sx={{ display: "flex", alignItems: "center", padding: 0 }}
                  >
                    <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />

                    <Typography sx={{ ...AccHeading }}>
                      Loan Tenure at your Discretion
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      Choose the loan tenure per your convenience. Just ensure
                      the chosen EMI is within your repayment capacity.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "center", sm: "left" },
                  }}
                >
                  <GetMatchedButton />
                </Box>
              </Box>
            </Box>
          </Grid>
          {/* Right Side */}
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                color: "white",
              }}
            >
              <Box sx={{ width: "100%" }} paddingLeft={{ md: "50px" }}>
                <img
                  src={ChooseCredmudraForBlImg}
                  alt="loading"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ChooseCredmudraForBl;

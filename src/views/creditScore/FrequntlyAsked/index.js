import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FiberManualRecord } from "@mui/icons-material";

const FrequntlyAsked = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const AccHeading = {
    fontSize: { xs: "20px", sm: "22px" },
    fontFamily: "Inter",
    fontWeight: "700",
  };
  const AccPara = {
    color: "#222",
    fontFamily: "Inter",
    fontSize: { xs: "16px", sm: "18px" },
  };

  const CheckCircle = {
    color: "#5AB56B",
    marginRight: "10px",
    marginTop: "10px",
    fontSize: "15px",
  };
  return (
    <>
      <Container maxWidth={"xl"} sx={{ padding: "60px 0px 50px" }}>
        <Grid
          container
          sx={{
            padding: { xs: "10px", md: "32px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          spacing={2}
        >
          {/* Left Side */}
          <Grid item xs={12} sm={5}>
            {/* <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-around"}}> */}
            <Box
              sx={{
                // textAlign: "left",
                // padding: "3rem",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: { xs: "flex-start" },
                // paddingX: { lg: "50px", xl: "70px" },
                // margin:{sm:"70% 0% 0% 0%"}
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "24px", sm: "26px", md: "32px" },
                  fontWeight: "900",
                  fontFamily: "Inter,sans-serif",
                  // padding: { xl: "5rem 0 0" },
                  color: "#243771",
                  margin: "0px 0px 30px",
                }}
              >
                Frequently Asked Questions:
              </Typography>
            </Box>
            {/* </Box> */}
          </Grid>
          {/* Right Side */}
          <Grid item xs={12} sm={7}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                borderRadius: "10px",
                fontFamily: "Inter,sans-serif",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  // padding:"15px 20px 11px 30px"
                }}
              >
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  sx={{
                    backgroundColor: "#FCEFB8",
                    marginTop: "20px",
                    boxShadow: "0 3px 6px rgba(0,0,0,.161)",
                    borderRadius: "10px",
                    border: "none !important",
                  }}
                  elevation={0}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{ color: "#5AB56B", fontSize: "40px" }}
                      />
                    }
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    {/* <Circle sx={{ ...CircleIcon }} /> */}
                    <FiberManualRecord sx={{ ...CheckCircle }} />

                    <Typography sx={{ ...AccHeading }}>
                      Can I review my Credit Score, and who has access to it?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      Your Credit score is confidential and accessible solely by
                      you or specific authorized entities, primarily trusted
                      institutions like banks or financial organizations. They
                      access this information primarily when considering new
                      loan or credit card applications.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                  border={"none"}
                  sx={{
                    backgroundColor: "#FCEFB8",
                    marginTop: "20px",
                    boxShadow: "0 3px 6px rgba(0,0,0,.161)",
                    borderRadius: "10px",
                    "&::before": {
                      backgroundColor: "rgb(0 0 0 / 0%)",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{ color: "#5AB56B", fontSize: "40px" }}
                      />
                    }
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
                    {/* <Circle sx={{ ...Circle }} /> */}
                    <FiberManualRecord sx={{ ...CheckCircle }} />

                    <Typography sx={{ ...AccHeading }}>
                      What is the minimum Credit score for a personal loan?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      The minimum score varies depending on the lender.
                      Generally, a score of 750 or higher increases your
                      approval chances. Some lenders might consider scores of
                      600-650 for personal loans at higher interest rates.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                  sx={{
                    backgroundColor: "#FCEFB8",
                    marginTop: "20px",
                    boxShadow: "0 3px 6px rgba(0,0,0,.161)",
                    borderRadius: "10px",
                    "&::before": {
                      backgroundColor: "rgb(0 0 0 / 0%)",
                    },
                  }}
                  elevation={0}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{ color: "#5AB56B", fontSize: "40px" }}
                      />
                    }
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    {/* <Circle sx={{ ...Circle }} /> */}
                    <FiberManualRecord sx={{ ...CheckCircle }} />

                    <Typography sx={{ ...AccHeading }}>
                      How can I improve my credit score?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      Implement these strategies to improve your credit score-
                      Pay bills on time, Maintain low credit utilization, Build
                      a diverse credit mix, Check your credit report for errors
                      and dispute them, Avoid applying for too much credit at
                      once.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                  sx={{
                    backgroundColor: "#FCEFB8",
                    marginTop: "20px",
                    boxShadow: "0 3px 6px rgba(0,0,0,.161)",
                    borderRadius: "10px",
                    "&::before": {
                      backgroundColor: "rgb(0 0 0 / 0%)",
                    },
                  }}
                  elevation={0}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{ color: "#5AB56B", fontSize: "40px" }}
                      />
                    }
                    aria-controls="panel5d-content"
                    id="panel5d-header"
                  >
                    {/* <Circle sx={{ ...Circle }} /> */}
                    <FiberManualRecord sx={{ ...CheckCircle }} />

                    <Typography sx={{ ...AccHeading }}>
                      Why does my Credit Score fluctuate?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      Your score fluctuates due to factors like payment history,
                      credit utilization, and new credit applications. Frequent
                      credit applications can lower your score, as it suggests
                      seeking too much credit simultaneously.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                  sx={{
                    backgroundColor: "#FCEFB8",
                    marginTop: "20px",
                    boxShadow: "0 3px 6px rgba(0,0,0,.161)",
                    borderRadius: "10px",
                    "&::before": {
                      backgroundColor: "rgb(0 0 0 / 0%)",
                    },
                  }}
                  elevation={0}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{ color: "#5AB56B", fontSize: "40px" }}
                      />
                    }
                    aria-controls="panel4d-content"
                    id="panel4d-header"
                  >
                    {/* <Circle sx={{ ...Circle }} /> */}
                    <FiberManualRecord sx={{ ...CheckCircle }} />

                    <Typography sx={{ ...AccHeading }}>
                      How can I check my credit score?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ ...AccPara }}>
                      Several methods exist to review your credit score in
                      India. Accessing your free annual credit report from each
                      credit bureau is one option. Additionally, some websites
                      and financial institutions offer paid credit score
                      services.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default FrequntlyAsked;

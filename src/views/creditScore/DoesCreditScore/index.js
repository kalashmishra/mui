import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import GetFreeCreditButton from "../../../components/GetFreeCreditButton";
import DoesCreditimg from "../../../assets/images/CreditScoreImages/DoesCreditscore.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";


const DoesCreditScore = () => {
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
    fontSize: { xs: "16px", sm:"18px" },
  };

  const CheckCircle = {
    // marginTop: "6px",
    color: "black",
    marginRight: "10px",
  };
  return (
    <>
      <Grid
        container
        sx={{
          paddingY: "5%",
          display: "flex",
          flexDirection: { xs: "column-reverse", sm: "row" },
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            padding: { xs: "10px 16px 0px", sm: "0" },
            display: "flex",
            alignContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: { sm: "7%" },
              marginTop: { xs: "20px", sm: "0" },
              //   padding: { sm: "20% 4% 10%", md: "10% 4% 10% 0%", lg: "0% 0%" },
            }}
          >
            <img alt="loading" style={{ width: "80%" }} src={DoesCreditimg} />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          sx={{ padding: { xs: "10px 16px 0px", sm: "0" } }}
        >
         <Box
            sx={{
              width: { xs: "100%", sm: "80%" },
              //   marginLeft: { xs: "0%", sm: "5%" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "24px", sm: "28px", lg: "38px" },
                fontWeight: "900",
                fontFamily: "Inter,sans-serif",
                color: "#243771",
                margin: { xs: "0px 0px 12px", lg: "0px 0px 28px" },
                textAlign: { xs: "center", sm: "left" },
                lineHeight: "1.1",
              }}
            >
              Does My Credit Score Get Impacted If I Inquire About It?
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "20px" },
                color: "#243771",
                margin: "0px 0px 20px",
                textAlign: { xs: "center", sm: "left" },
                lineHeight: "1.7",
              }}
            >
              While a single hard inquiry minimally affects your credit score,
              numerous inquiries within a short span can raise lender concerns,
              potentially causing a slight dip in your score.
            </Typography>
            <Accordion
              elevation={0}
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              sx={{
                backgroundColor: "transparent",
                //   marginTop: "20px",
                // padding: "0px 0px 10px 0px",
              }}
            >
              <AccordionSummary
                // sx={{display:'flex',alignItems:'center'}}
                expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <CheckCircleOutlineIcon
                  sx={{ ...CheckCircle, paddingTop: "5px" }}
                />
                <Typography sx={{ ...AccHeading }}>
                  The timing of inquiries matters:
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ ...AccPara }}>
                  Credit scoring models consider the timeframe of inquiries. If
                  you're loan or credit card shopping, multiple inquiries within
                  14-45 days for the same purpose are typically treated as a
                  single inquiry.
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
                sx={{ display: "flex", alignItems: "center" }}
                expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <CheckCircleOutlineIcon sx={{ ...CheckCircle, paddingTop:"5px" }} />
                <Typography sx={{ ...AccHeading }}>
                  Duration of impact:
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ ...AccPara }}>
                  The impact of a hard inquiry is not permanent. With good
                  credit habits, its effect diminishes over time, ensuring your
                  credit score recovery.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "20px" },
                color: "#243771",
                margin: "0px 0px 20px",
                textAlign: { xs: "center", sm: "left" },
                lineHeight: "1.7",
                paddingTop: "10px",
              }}
            >
              In the initial stages of your credit journey, banks may lack
              access to your credit score. They assess loan eligibility based on
              factors like income, job stability, and overall financial
              standing, emphasizing creditworthiness beyond just credit history.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "left" },
              }}
            >
              <GetFreeCreditButton />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default DoesCreditScore;

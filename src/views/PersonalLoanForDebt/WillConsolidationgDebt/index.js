import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import willconsolidatingdebt from "../../../assets/images/PersonalLoanForDebtImages/pldc_good.jpg";
import GetMatchedButton from "../../../components/GetMatchedButton";

const WillConsolidatingDebt = () => {
  return (
    <Box>
      <Grid container bgcolor="#FCEFD8">
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            padding: { xs: "20px",md:"48px"},
            display: "flex",
            alignItems: { xs: "center", },
            justifyContent: { xs: "center",},
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width:{xl:"80%"}
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "28px",lg: "32px",xl:'38px' },
                fontWeight: "900",
                fontFamily: "Inter,sans-serif",
                color: "#243771",
                margin: { xs: "0px 0px 12px", lg: "0px 0px 28px" },
                textAlign: { xs: "center", sm: "left" },
                lineHeight: "1.1",
              }}
            >
              Will Consolidating Debts With A Personal Loan Affect Your CIBIL
              Score?
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "20px", lg: "20px" },
                fontWeight: "300",
                fontFamily: "Inter,sans-serif",
                color: "#404040",
                margin: { xs: "0px 0px 24px", lg: "0px 0px 30px" },
                textAlign: { xs: "center", sm: "left" },
                lineHeight: "1.5",
              }}
            >
              If you consolidate your ongoing debt into a new loan, the
              low-interest credit can hurt your CIBIL score in the short term.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "20px", lg: "20px" },
                fontWeight: "300",
                fontFamily: "Inter,sans-serif",
                color: "#404040",
                margin: { xs: "0px 0px 24px", lg: "0px 0px 30px" },
                textAlign: { xs: "center", sm: "left" },
                lineHeight: "1.6",
              }}
            >
              Nevertheless, if you continue making regular payments toward your
              debt consolidation loan, you can improve your CIBIL score fast and
              build a decent score that will help you get quick loan approvals
              in the long run. Timely EMI payments will help you maintain an
              excellent credit history.
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
            padding: { xs: "16px", sm: "0" },
            display: "flex",
            alignItems: { xs: "center",xl:"flex-end"},
            justifyContent: { xs: "center",xl:"flex-end" },
          }}
        >
          <Box>
            <img src={willconsolidatingdebt} alt="loading" style={{width:"100%"}} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WillConsolidatingDebt;

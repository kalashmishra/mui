import {
  Box,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  tableCellClasses,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import GetMatchedButton from "../../../components/GetMatchedButton";

const InterestRate = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#243771",
      color: "white",
      fontWeight: "900",
      textAlign: "center",
    },
    [`&.${tableCellClasses.body}`]: {
      textAlign: "center",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "#FCEFB8",
    },
    // hide last border
    "&:last-child th": {
      border: 0,
      borderRight: "2px solid #C1C5D3",
    },
  }));
  function createData(bank, interestrate) {
    return { bank, interestrate };
  }
  const rows = [
    createData("Axis Bank", "14.95% to 19.20% per annum"),
    createData("Bajaj Finserv", "9.75% to 30% per annum"),
    createData("HDB Financial Services Ltd.	", "Up to 36% per annum"),
    createData("HDFC Bank", "10% to 22.50% per annum"),
    createData("IDFC FIRST Bank	", "10.50% per annum onwards"),
    createData("Kotak Mahindra Bank	", "16% to 26% per annum"),
    createData("Tata Capital", "12% per annum onwards"),
  ];
  return (
    <Box bgcolor="#fcefd8">
      <Container maxWidth={"xl"} sx={{ padding: "60px 0px 50px" }}>
        <Grid
          container
          spacing={2}
          sx={{ padding: { xs: "20px", md: "48px" } }}
        >
          <Grid
            item
            xs={12}
            // sm={6}
            md={6}
            lg={6}
            xl={6}
            sx={{
              display: "flex",
              alignItems: { sm: "center", md: "flex-start" },
              justifyContent: { sm: "center" },
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                width: { sm: "80%", lg: "80%", xl: "65%" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "22px", sm: "24px", md: "36px" },
                  // lineHeight:"1.4",
                  font: "normal normal 900 44px/50px Inter",
                  marginBottom: "10px",
                  color: "#243771",
                  fontWeight: "900",
                }}
              >
                Interest Rates On Business Loan Offers
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "17px",
                    sm: "18px",
                    lg: "16px",
                    xl: "18px",
                  },
                  font: "Inter",
                  marginBottom: "10px",
                  color: "#10162c",
                  // fontWeight:"900"
                  opacity: 1,
                }}
              >
                Please check the applicable interest rates on business loan
                offers extended by several leading financial institutions in our
                country:
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "17px",
                    sm: "18px",
                    lg: "16px",
                    xl: "18px",
                  },
                  font: "Inter",
                  marginBottom: "10px",
                  color: "#10162c",
                  // fontWeight:"900"
                  opacity: 1,
                }}
              >
                You must note that these interest rates are subject to change
                without any prior notice. Further, the applicable interest rate
                will depend on your eligibility for the credit facility. Hence,
                contact your lending institution in order to know the actual
                interest rate applicable to your business loan.
              </Typography>
              <Box>
                <GetMatchedButton />
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "center" },
              justifyContent: { xs: "center", sm: "center" },
            }}
          >
            <Box sx={{ width: { md: "100%" } }}>
              <Paper
                elevation={5}
                sx={{
                  padding: 2,
                  // boxShadow: "5px 5px 10px gray",
                  backgroundColor: "#E9E9E9",
                }}
              >
                <TableContainer component={Paper}>
                  <Table aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell
                          sx={{
                            borderRight: "2px solid #C1C5D3",
                            //   padding: "16px 10px",
                            fontSize: { xs: "18px" },
                            fontFamily: "Inter,sans-serif",
                          }}
                        >
                          BANK
                        </StyledTableCell>
                        <StyledTableCell
                          align="right"
                          sx={{
                            borderRight: "2px solid #C1C5D3",
                            // padding:"16px 10px",
                            fontSize: { xs: "18px" },
                            fontFamily: "Inter,sans-serif",
                          }}
                        >
                          INTEREST RATE
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <StyledTableRow key={row.i}>
                          <StyledTableCell
                            component="th"
                            scope="row"
                            sx={{
                              borderRight: "2px solid #C1C5D3",
                              fontSize: "18px",
                              fontFamily: "Inter,sans-serif",
                              padding: "15px",
                              textAlign: "center",
                              color: "#404040",
                            }}
                          >
                            {row.bank}
                          </StyledTableCell>
                          <StyledTableCell
                            align="right"
                            sx={{
                              borderRight: "2px solid #C1C5D3",
                              fontSize: "18px",
                              fontFamily: "Inter,sans-serif",
                              padding: "15px",
                              textAlign: "center",
                              color: "#404040",
                            }}
                          >
                            {row.interestrate}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InterestRate;

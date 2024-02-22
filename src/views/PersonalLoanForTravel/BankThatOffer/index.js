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

const BankThatOffer = () => {
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
    createData("HDFC Bank", "Starting from 10.50% p.a."),
    createData("IDFC First Bank", "Starting from 10.49% p.a."),
    createData("Kotak Mahindra Bank", "Starting from 10.99% p.a."),
    createData("ICICI Bank", "Starting from 10.75% p.a."),
    createData("Axis Bank", "Starting from 10.25% p.a."),
    createData("Standard Chartered", "Starting from 11% p.a."),
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
                  Banks That Offer Travel Loan
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
                  Take a look at the following table to learn about some of the
                  top banks that offer travel loans at competitive interest
                  rates:
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

export default BankThatOffer;

import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  CardMedia,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import CredmudraLogo from "../../assets/images/credmudra_logo_new.png";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import ExpandMoreTwoToneIcon from "@mui/icons-material/ExpandMoreTwoTone";

const Header = () => {
  const navigate = useNavigate();
  const [showBox, setShowBox] = useState(false);
  const [menuBox, setMenuBox] = useState(false);
  const [mobilePersonalLoanDropdown, setMobilePersonalLoanDropdown] =
    useState(false);

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate("/");
  };

  const handleBusinessLoanClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate("/business-loan");
  };

  const handlePersonalLoanHover = () => {
    setShowBox(true);
  };

  const handlePersonalLoanMouseLeave = () => {
    setShowBox(false);
  };

  const handleLinkClick = (to) => {
    // setShowBox(false);
    navigate(to);
  };

  const handleMenuClick = () => {
    setMenuBox(!menuBox);
  };

  const handleMobilePersonalLoanClick = () => {
    setMobilePersonalLoanDropdown(!mobilePersonalLoanDropdown);
  };
  return (
    <>
      <Box>
        <AppBar
          sx={{
            boxShadow: "none",
            backgroundColor: "black",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar sx={{ paddingX: { xs: 0 } }}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
                paddingX={{ xs: "20px", sm: "24px", md: "48px" }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: "150px", sm: "170px", md: "200px" },
                    cursor: "pointer",
                  }}
                  image={CredmudraLogo}
                  onClick={handleLogoClick}
                />
                <Stack
                  direction="row"
                  spacing={6}
                  sx={{
                    display: { xs: "none", sm: "none", md: "flex" },
                    cursor: "pointer",
                  }}
                >
                  <Link
                    underline="none"
                    color="white"
                    fontWeight="500"
                    fontSize="16"
                    fontFamily="Inter, sans-serif"
                    onClick={handleBusinessLoanClick}
                  >
                    Business Loan
                  </Link>
                  <Link
                    underline="none"
                    color="white"
                    fontWeight="500"
                    fontSize="16"
                    fontFamily="Inter, sans-serif"
                    display="flex"
                    onMouseEnter={handlePersonalLoanHover}
                  >
                    Personal Loan
                    <KeyboardArrowDownOutlinedIcon
                      sx={{ height: "20px", width: "20px" }}
                    />
                  </Link>
                  <Link
                    underline="none"
                    color="white"
                    fontWeight="500"
                    fontSize="16"
                    fontFamily="Inter, sans-serif"
                  >
                    Blogs
                  </Link>
                </Stack>
                <Box
                  sx={{
                    display: { xs: "flex", md: "none" },
                    height: { xs: "33px", sm: "36px" },
                    width: { xs: "38px", sm: "42px" },
                    bgcolor: "#F7D64A",
                    borderRadius: "2px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MenuIcon
                    fontSize="large"
                    sx={{ color: "#000" }}
                    onClick={handleMenuClick}
                  />
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      {showBox && (
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            height: "230px",
            width: { md: "950px", lg: "1150px", xl: "1400px" },
            backgroundColor: "#000",
            position: "fixed",
            top: "64px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 9999,
          }}
          onMouseEnter={handlePersonalLoanHover}
          onMouseLeave={handlePersonalLoanMouseLeave}
        >
          <Grid Container sx={{ display: "flex", width: "100%" }}>
            <Grid
              item={4}
              sx={{
                bgcolor: "#000",
                width: "33%",
                padding: "20px 100px 0 30px",
              }}
            >
              <Typography
                sx={{
                  color: "#F7D64A",
                  fontWeight: 900,
                  fontFamily: "Inter",
                  paddingBottom: "10px",
                }}
                variant="h5"
              >
                Personal Loan
              </Typography>
              <Typography sx={{ color: "white" }}>
                Experience The Convenience Of Getting An Instant Personal Loan
                Through Our Easy Application Process.
              </Typography>
            </Grid>
            <Grid
              item={4}
              sx={{
                bgcolor: "#000",
                width: "33%",
                display: "flex",
                flexDirection: "column",
                paddingTop: "30px",
              }}
            >
              <Link
                onClick={() => handleLinkClick("/personal-loan")}
                style={{
                  color: "#fff",
                  fontFamily: "Inter",
                  textDecoration: "none",
                  cursor: "pointer",
                  textTransform: "capitalize",
                }}
              >
                Personal Loan
              </Link>
              <Link
                onClick={() => handleLinkClick("/personalloanfordebt")}
                style={{
                  color: "#fff",
                  fontFamily: "Inter",
                  paddingTop: "10px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Personal Loan For Debt Consolidation
              </Link>
              <Link
                onClick={() => handleLinkClick("/personalloanformedical")}
                style={{
                  color: "#fff",
                  fontFamily: "Inter",
                  paddingTop: "10px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Personal Loan For Medical Emergencies
              </Link>
              <Link
                to={"/personalloanfortravel"}
                onClick={() => handleLinkClick("/personalloanfortravel")}
                style={{
                  color: "#fff",
                  fontFamily: "Inter",
                  paddingTop: "10px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Personal Loan For Travel
              </Link>
              <Link
                onClick={() => handleLinkClick("/personalloanfortwowheeler")}
                style={{
                  color: "#fff",
                  fontFamily: "Inter",
                  paddingTop: "10px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Personal Loan For Two Wheeler
              </Link>
            </Grid>
            <Grid
              item={4}
              sx={{
                bgcolor: "#000",
                width: "33%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Link
                onClick={() =>
                  handleLinkClick("/personalloanforhomerenovation")
                }
                style={{
                  color: "#fff",
                  fontFamily: "Inter",
                  paddingTop: "60px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Personal Loan For Home Renovation
              </Link>
              <Link
                onClick={() => handleLinkClick("/personalloaneligibility")}
                style={{
                  color: "#fff",
                  fontFamily: "Inter",
                  paddingTop: "10px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Personal Loan Eligibility
              </Link>
              <Link
                onClick={() => handleLinkClick("/personalloaninterestrate")}
                style={{
                  color: "#fff",
                  fontFamily: "Inter",
                  paddingTop: "10px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Personal Loan Interest Rate
              </Link>
              <Link
                onClick={() => handleLinkClick("/personalloanemicalculator")}
                style={{
                  color: "#fff",
                  fontFamily: "Inter",
                  paddingTop: "10px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Personal Loan EMI Calculator
              </Link>
            </Grid>
          </Grid>
        </Box>
      )}
      {menuBox && (
        <Box
          sx={{
            position: "fixed",
            zIndex: "99",
            width: "100%",
            height: "auto",
            bgcolor: "#000",
            marginTop: { xs: "56px", sm: "64px" },
            display: { xs: "flex", md: "none" },
          }}
        >
          <List sx={{ width: "100%" }}>
            <ListItem
              sx={{
                borderTop: "1px solid #F6D549",
                borderBottom: "1px solid #F6D549",
                paddingY: "10px",
              }}
            >
              <Typography sx={{ color: "white", fontSize: "17px" }}>
                Business Loan
              </Typography>
            </ListItem>
            <Accordion
              sx={{
                backgroundColor: "transparent",
                color: "white",
                fontSize: "17px",
              }}
              onChange={handleMobilePersonalLoanClick}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreTwoToneIcon
                    sx={{ color: "#F6D549", fontSize: "20px" }}
                  />
                }
                sx={{  maxHeight:"48px", marginY:"0px" }}
              >
                <Typography sx={{ color: "white", fontSize: "17px" }}>
                  Personal Loan
                </Typography>
              </AccordionSummary>
              {/* Add your accordion content here */}
              <AccordionDetails sx={{borderTop: "1px solid #F6D549",}}>
                <Box
                  item={12}
                  sx={{
                    bgcolor: "#000",
                    width: "100%",
                    // padding: "20px 100px 0 30px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#F7D64A",
                      fontWeight: 900,
                      fontFamily: "Inter",
                      paddingBottom: "10px",
                      textAlign: { xs: "left", sm: "center" },
                    }}
                    variant="h5"
                  >
                    Personal Loan
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      textAlign: { xs: "left", sm: "center" },
                    }}
                  >
                    Experience The Convenience Of Getting An Instant Personal
                    Loan Through Our Easy Application Process.
                  </Typography>
                </Box>
                <Grid
                  Container
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-around",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: { sm: "30px" },
                  }}
                  // spacing={6}
                >
                  <Grid
                    item
                    sx={{
                      bgcolor: "#000",
                      // width: "33%",
                      display: "flex",
                      paddingTop: "30px",
                      flexDirection: "column",
                    }}
                  >
                    <Link
                      onClick={() => handleLinkClick("/personal-loan")}
                      style={{
                        color: "#fff",
                        fontFamily: "Inter",
                        textDecoration: "none",
                        cursor: "pointer",
                        textTransform: "capitalize",
                      }}
                    >
                      Personal Loan
                    </Link>
                    <Link
                      onClick={() => handleLinkClick("/personalloanfordebt")}
                      style={{
                        color: "#fff",
                        fontFamily: "Inter",
                        paddingTop: "10px",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      Personal Loan For Debt Consolidation
                    </Link>
                    <Link
                      onClick={() => handleLinkClick("/personalloanformedical")}
                      style={{
                        color: "#fff",
                        fontFamily: "Inter",
                        paddingTop: "10px",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      Personal Loan For Medical Emergencies
                    </Link>
                    <Link
                      to={"/personalloanfortravel"}
                      onClick={() => handleLinkClick("/personalloanfortravel")}
                      style={{
                        color: "#fff",
                        fontFamily: "Inter",
                        paddingTop: "10px",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      Personal Loan For Travel
                    </Link>
                    <Link
                      onClick={() =>
                        handleLinkClick("/personalloanfortwowheeler")
                      }
                      style={{
                        color: "#fff",
                        fontFamily: "Inter",
                        paddingTop: "10px",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      Personal Loan For Two Wheeler
                    </Link>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      bgcolor: "#000",
                      // width: "33%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Link
                      onClick={() =>
                        handleLinkClick("/personalloanforhomerenovation")
                      }
                      style={{
                        color: "#fff",
                        fontFamily: "Inter",
                        paddingTop: "60px",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      Personal Loan For Home Renovation
                    </Link>
                    <Link
                      onClick={() =>
                        handleLinkClick("/personalloaneligibility")
                      }
                      style={{
                        color: "#fff",
                        fontFamily: "Inter",
                        paddingTop: "10px",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      Personal Loan Eligibility
                    </Link>
                    <Link
                      onClick={() =>
                        handleLinkClick("/personalloaninterestrate")
                      }
                      style={{
                        color: "#fff",
                        fontFamily: "Inter",
                        paddingTop: "10px",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      Personal Loan Interest Rate
                    </Link>
                    <Link
                      onClick={() =>
                        handleLinkClick("/personalloanemicalculator")
                      }
                      style={{
                        color: "#fff",
                        fontFamily: "Inter",
                        paddingTop: "10px",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      Personal Loan EMI Calculator
                    </Link>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
            <ListItem
              sx={{
                color: "white",
                fontSize: "17px",
                paddingY: "10px",
                borderTop: "1px solid #F6D549",
                borderBottom: "1px solid #F6D549",
              }}
            >
              <Typography sx={{ color: "white", fontSize: "17px" }}>
                Blogs
              </Typography>
            </ListItem>
          </List>
        </Box>
      )}
    </>
  );
};

export default Header;

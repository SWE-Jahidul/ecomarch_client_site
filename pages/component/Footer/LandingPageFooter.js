import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const LandingPageFooter = () => {
  return (
    <Container>
      <Grid container spacing={2} style={{ marginTop: 20 }}>
        <Grid item xs={6} md={3}>
          <Box>
            <Typography>QUESTIONS ?</Typography>
            <Box style={{ marginTop: 10 }}>
              <Typography variant="body2" gutterBottom>
                Help
              </Typography>
              <Typography variant="body2" gutterBottom>
                Trace Order
              </Typography>
              <Typography variant="body2" gutterBottom>
                {" "}
                Return{" "}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box>
            <Typography> WHAT'S IN STORE </Typography>
            <Box style={{ marginTop: 10 }}>
              <Typography variant="body2" gutterBottom>
                Women
              </Typography>
              <Typography variant="body2" gutterBottom>
                {" "}
                Men
              </Typography>
              <Typography variant="body2" gutterBottom>
                {" "}
                Product A-Z{" "}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {" "}
                Buy Gift Vouchers
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box>
            <Typography>FOLLOW US </Typography>
            <Box style={{ marginTop: 10 }}>
              <Typography variant="body2" gutterBottom>
                Facebook
              </Typography>
              <Typography variant="body2" gutterBottom>
                {" "}
                Twitter{" "}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {" "}
                YouTube{" "}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box>
            <Typography>©2022 Ecommerce Ltd </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPageFooter;

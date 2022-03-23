import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const SingleCategory = () => {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      style={{ margin: 20 }}
    >
      <Grid xs={12} md={3} lg={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="140" image="" alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid xs={12} md={3} lg={3}></Grid>
      <Grid xs={12} md={3} lg={3}></Grid>
      <Grid xs={12} md={3} lg={3}></Grid>
    </Grid>
  );
};

export default SingleCategory;

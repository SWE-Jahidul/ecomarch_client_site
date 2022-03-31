import React from "react";
import Typography from "@mui/material/Typography";
import SingleCategory from "./SingleCategory";

const ShopByCategorySlider = () => {
  return (
    <div>
      <Typography variant="h5" component="h5" style={{ paddingTop:15 , marginLeft:25}}>
        Shop by Category
      </Typography>

      <SingleCategory> </SingleCategory>
    </div>
  );
};

export default ShopByCategorySlider;

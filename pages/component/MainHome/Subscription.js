import React from "react";
import Typography from "@mui/material/Typography";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";

const Subscription = () => {
  return (
    <div style={{ backgroundColor: "#EFEFEF", padding: "30px 0px" }}>
      <Typography
        variant="h5"
        gutterBottom
        component="div"
        style={{ textAlign: "center", color: "red" }}
      >
        10% Discount for your subscription
      </Typography>

      <Typography variant="body2" gutterBottom style={{ textAlign: "center" }}>
        Carry the day in style with this extra-large tote crafted in our chic
        B.B. Collection textured PVC.<br></br> Featuring colorful faux leather
        trim, this tote offers a roomy interior.
      </Typography>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        component="form"
        noValidate
        autoComplete="off"
      >
        <FormControl sx={{ width: "25ch" }}>
          <OutlinedInput
            style={{ padding: "0px 0px" }}
            size="small"
            placeholder="Your Email Here "
          />
        </FormControl>
      </Box>
    </div>
  );
};

export default Subscription;

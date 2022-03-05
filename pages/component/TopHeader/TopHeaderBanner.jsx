import React from "react";
const styles = {
  paperContainer: {
    height: "350px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${"https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"})`,
  },
};
const TopHeaderBanner = () => {
  return <div style={styles.paperContainer}></div>;
};

export default TopHeaderBanner;

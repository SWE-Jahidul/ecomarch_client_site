// IMPORTING APIS
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@material-ui/core";


import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@mui/material/styles";

// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing,
  },
  title: {
    flexGrow: 1,
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}

const TopHeader = (props) => {
  const classes = useStyles();

  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };
  return (
    <div className={classes.root} > 
      <AppBar style={{ backgroundColor:'white' }} elevation={0}> 
        <Toolbar>
          <Typography
            variant="h5"
            component="p"
            color="white"
            className={classes.title}
          >
          <span className="navbar" >  E-commarch </span> 
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                color="white"
                className={classes.menuButton}
                edge="start"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchor}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                KeepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
              >
                {/* Mens  */}
                <MenuItem onClick={() => setAnchor(null)} to="/mens">
                  <Typography variant="h6" className="navbar_menu"> Mens </Typography>
                </MenuItem>
                {/* Womens  */}

                <MenuItem onClick={() => setAnchor(null)} to="/women">
                  <Typography variant="h6" className="navbar_menu"> Wo-Mens </Typography>
                </MenuItem>
                <MenuItem onClick={() => setAnchor(null)} to="/sports">
                  <Typography variant="h6" className="navbar_menu"> Sports </Typography>
                </MenuItem>

                <MenuItem onClick={() => setAnchor(null)} to="/sports">
                  <Typography variant="h6" className="navbar_menu"> Kids </Typography>
                </MenuItem>

                <MenuItem onClick={() => setAnchor(null)} to="/brands">
                  <Typography variant="h6" className="navbar_menu"> Brands </Typography>
                </MenuItem>
              </Menu>
            </>
          ) : (
            <div style={{ marginRight: "2rem", display: "flex" }}>
              {/* Mens  */}
              <MenuItem onClick={() => setAnchor(null)} to="/mens">
                <Typography variant="h6" className="navbar_menu"> Mens </Typography>
              </MenuItem>
              {/* Womens  */}

              <MenuItem onClick={() => setAnchor(null)} to="/women">
                <Typography variant="h6" className="navbar_menu"> Wo-Mens </Typography>
              </MenuItem>
              <MenuItem onClick={() => setAnchor(null)} to="/sports">
                <Typography variant="h6" className="navbar_menu"> Sports </Typography>
              </MenuItem>

              <MenuItem onClick={() => setAnchor(null)} to="/sports">
                <Typography variant="h6" className="navbar_menu"> Kids </Typography>
              </MenuItem>

              <MenuItem onClick={() => setAnchor(null)} to="/brands">
                <Typography variant="h6" className="navbar_menu"> Brands </Typography>
              </MenuItem>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopHeader;

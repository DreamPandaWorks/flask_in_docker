import React from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";

const CreatrorsAppBar = ({
  drawerToggle,
  isOpenDrawer,
  breadCrumbs,
  drawerWidth = 240,
}) => {
  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#FFFFFF",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => {
              drawerToggle(isOpenDrawer);
            }}
            sx={{ display: { sm: "none" }, color: "#4B4A48" }}
          >
            <MenuIcon />
          </IconButton>
          <Breadcrumbs aria-label="breadcrumb">
            {Object.keys(breadCrumbs).map((key) => {
              return (
                <Link
                  underline="none"
                  color="inherit"
                  key={key}
                  href={breadCrumbs[key]}
                >
                  {key}
                </Link>
              );
            })}
          </Breadcrumbs>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default CreatrorsAppBar;

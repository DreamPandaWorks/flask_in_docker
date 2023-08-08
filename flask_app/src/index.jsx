import React, { useState } from "react";
import ReactDOM from "react-dom";
import Box from "@mui/material/Box";

// creators components
import CreatrorsAppBar from "./component/CreatrorsAppBar";
import CreatorsDrawerMenu from "./component/CreatorsDrawerMenu";
import CreatorsMobileDrawerMenu from "./component/CreatorsMobileDrawerMenu";

const Index = () => {
  const currentLocation = "ダッシュボード";
  const bread_crumbs = {
    DashBoard: "/creator/dashboard",
  };
  const [isOpenDrawer, setDrawerState] = useState(false);
  const drawerToggle = (isOpenDrawer) => {
    setDrawerState(!isOpenDrawer);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <CreatrorsAppBar
          drawerToggle={drawerToggle}
          isOpenDrawer={isOpenDrawer}
          breadCrumbs={bread_crumbs}
          currentLocation={currentLocation}
        />

        <Box
          component="nav"
          sx={{ color: "#DEDEDE", width: { sm: 240 }, flexShrink: { sm: 0 } }}
        >
          <CreatorsMobileDrawerMenu
            isOpenDrawer={isOpenDrawer}
            drawerToggle={drawerToggle}
            currentLocation={currentLocation}
          />

          <CreatorsDrawerMenu currentLocation={currentLocation} />
        </Box>
      </Box>
    </React.Fragment>
  );
};

if (document.getElementById("index")) {
  const root = ReactDOM.createRoot(document.getElementById("index"));
  root.render(<Index />);
}

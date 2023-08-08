import React from "react";
import Divider from "@mui/material/Divider";

const CreatorsDivider = ({ drawerWidth = 0, sx = {} }) => {
  // merge sx
  const _sx = Object.assign(
    {
      width: { sm: `calc(100% - ${drawerWidth}px)` },
      ml: { sm: `${drawerWidth}px` },
      backgroundColor: "#4B4A48",
      width: "100%",
    },
    sx
  );

  return (
    <React.Fragment>
      <Divider sx={_sx} />
    </React.Fragment>
  );
};

export default CreatorsDivider;

import React from "react";
import Button from "@mui/material/Button";

const InputButton = ({
  label,
  clickEvent = () => {},
  sx = {},
  option_data = null,
  variant = "outlined",
}) => {
  // merge sx
  const _sx = Object.assign(
    {
      border: "1px solid rgba(0, 0, 0, 0.0)",
      borderRadius: 2,
      backgroundColor: "#CACACA",
      color: "#4B4A48",
      "&:hover": {
        border: "1px solid rgba(0, 0, 0, 0.0)",
        backgroundColor: "#DBDBDB",
        boxShadow: "none",
      },
    },
    sx
  );

  return (
    <React.Fragment>
      <Button
        variant={variant}
        data-option_data={option_data}
        onClick={clickEvent}
        sx={_sx}
      >
        {label}
      </Button>
    </React.Fragment>
  );
};

export default InputButton;

import React from "react";
import Button from "@mui/material/Button";

const InputSubmitButton = ({
  id,
  name,
  form,
  label,
  value = "",
  changeEvent,
  disabled = false,
  variant = "outlined",
  sx = {},
}) => {
  const _sx = Object.assign(
    {
      border: "1px solid rgba(0, 0, 0, 0.0)",
      borderRadius: 6,
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
        type="submit"
        disabled={disabled}
        form={form}
        variant={variant}
        onClick={changeEvent}
        id={id}
        name={name}
        value={value}
        sx={_sx}
      >
        {label}
      </Button>
    </React.Fragment>
  );
};

export default InputSubmitButton;

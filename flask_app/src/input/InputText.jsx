import React from "react";
import TextField from "@mui/material/TextField";

const InputText = ({
  id,
  name,
  text = "",
  changeEvent,
  placeHolder = "",
  type = "text",
  sx = {},
  inputProps = {},
}) => {
  // merge sx
  const _sx = Object.assign(
    {
      border: "1px solid #4B4A48",
      borderRadius: 1,
      backgroundColor: "#FFFFFF",
      color: "#4B4A48",
      // ホバーした場合
      "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
        borderBottomColor: "#746213",
      },
      "& .MuiOutlinedInput-root": {
        // 単純にフォーカスした場合
        "&:hover fieldset": {
          border: "1px solid #4B4A48",
        },
        // フォーカスがある状態でホバーを外した場合
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderWidth: 0,
        },
      },
    },
    sx
  );

  return (
    <React.Fragment>
      <TextField
        id={id}
        name={name}
        value={text}
        onChange={changeEvent}
        size="small"
        type={type}
        placeholder={placeHolder}
        sx={_sx}
        variant="outlined"
        InputProps={inputProps}
      />
    </React.Fragment>
  );
};

export default InputText;

import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

const Form = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  return (
    <>
      <TextField
        value={value}
        onChange={(ev) => {
          setValue(ev.target.value);
        }}
      />
      <Button
        onClick={() => {
          onSubmit(value);
          setValue("");
        }}
      >
        <SendIcon />
      </Button>
    </>
  );
};

export default Form;

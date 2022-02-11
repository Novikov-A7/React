import Button from "@mui/material/Button/Button";
import TextField from "@mui/material/TextField/TextField";
import { useEffect, useRef, useState } from "react";
import './style.css'


export const FormMui = ({ onSubmit }) => {
  const[value, setValue] = useState("");
  const textFieldFocus = useRef();
  
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");
    textFieldFocus.current?.focus();
  }
  useEffect(() =>{
    textFieldFocus.current?.focus()
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <TextField   className="myTextField" inputRef={textFieldFocus} value={value} onChange={handleChange} />
      <Button className="myBtn" type="submit"  onSubmit={handleSubmit}   >
        Send
      </Button>
    </form>
    
  )
}
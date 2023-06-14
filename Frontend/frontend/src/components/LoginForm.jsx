import {
    FormControl,
    Input,
    FormHelperText,
    InputGroup,
    InputRightElement,
    Text,
  } from "@chakra-ui/react";
  import axios from "axios";
  import { useState, useReducer } from "react";
  import { IoMdEye, IoMdEyeOff } from "react-icons/io";
//   import { ToastContainer, toast } from "react-toastify";
//   import "react-toastify/dist/ReactToastify.css";
//   import { useNavigate } from "react-router-dom";
  
 
  export const LoginForm = () => {
    // const Navigate = useNavigate();
  
    const [show, setShow] = useState(false);
    // const [state, dispatch] = useReducer(reducer, initState);
    const handleClick = () => setShow(!show);
  
    
    return (
      <form >
        <FormControl>
          <Input
            
            value={""}
            name="email"
            size="md"
            variant="flushed"
            type="email"
            placeholder="Enter Email"
          />
          <FormHelperText></FormHelperText>
        </FormControl>
        <FormControl>
          <InputGroup size="md">
            <Input
            
              value={""}
              name="password"
              size="md"
              variant="flushed"
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Text h="1.75rem" size="sm" onClick={handleClick}>
                {show ? <IoMdEye /> : <IoMdEyeOff />}
              </Text>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Input
          style={{
            marginTop: "25px",
            backgroundColor:"#8c52ff",
            color: "white",
          }}
          type="submit"
          value="Login"
        />
        {/* <ToastContainer /> */}
      </form>
    );
  };

import {
    FormControl,
    Input,
    FormHelperText,
    InputGroup,
    InputRightElement,
    Text,
  } from "@chakra-ui/react";
//   import axios from "axios";
  import { useState} from "react";
  import { IoMdEye, IoMdEyeOff } from "react-icons/io";
//   import { ToastContainer, toast } from "react-toastify";
//   import "react-toastify/dist/ReactToastify.css";
//   import { useNavigate } from "react-router-dom";
  
//   const initState = {
//     email: "",
//     password: "",
//   };
//   const reducer = (state, action) => {
//     const { type, payload } = action;
//     switch (type) {
//       case "email": {
//         return { ...state, email: payload };
//       }
//       case "password": {
//         return { ...state, password: payload };
//       }
//       case "reset": {
//         return initState;
//       }
//       default: {
//         throw new Error("Invelid Action type");
//       }
//     }
//   };
  
  export const SignupForm = () => {
    // const Navigate = useNavigate();
  
    const [show, setShow] = useState(false);
    // const [state, dispatch] = useReducer(reducer, initState);
    const handleClick = () => setShow(!show);
  
    
  
    // const { email, password } = state;
    return (
      <form >
         <FormControl>
              <Input
                name="name"
                size="md"
                variant="flushed"
                type="text"
                placeholder="Enter Full Name"
              />
              <FormHelperText></FormHelperText>
            </FormControl>
            <FormControl>
              <Input
                name="phone"
                size="md"
                variant="flushed"
                type="Number"
                placeholder="Enter Phone Number"
              />
              <FormHelperText></FormHelperText>
            </FormControl>
            <FormControl>
              <Input
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
          value="Register"
        />
        {/* <ToastContainer /> */}
      </form>
    );
  };
  
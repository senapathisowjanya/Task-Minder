import {
    FormControl,
    Input,
    FormHelperText,
    InputGroup,
    InputRightElement,
    Text,
    Toast,
  } from "@chakra-ui/react";
 
  import { useState } from "react";
  import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { postLoginData } from "../Redux/authReducer/action";



 import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
//   import { useNavigate } from "react-router-dom";
  
 
  export const LoginForm = () => {
    // const Navigate = useNavigate();
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const [show, setShow] = useState(false);
  
    // const data= useSelector((store)=> store)

    const dispatch=useDispatch()
    
    const handleClick = () => setShow(!show);
  
 const handalSubmit=(e)=>{
    e.preventDefault(email,password)
    
    dispatch(postLoginData(email,password))
    
 }
    
    return (
      <form onSubmit={handalSubmit} >
        <FormControl>
          <Input
            
            value={email}
            name="email"
            size="md"
            variant="flushed"
            type="email"
            placeholder="Enter Email"
            onChange={(e)=> setEmail(e.target.value)}
          />
          <FormHelperText></FormHelperText>
        </FormControl>
        <FormControl>
          <InputGroup size="md">
            <Input
            
              value={password}
              name="password"
              size="md"
              variant="flushed"
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              onChange={(e)=> setPassword(e.target.value)}
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
        <ToastContainer />
        
      </form>
    );
  };
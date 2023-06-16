import {
  FormControl,
  Input,
  FormHelperText,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
//   import axios from "axios";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useDispatch } from "react-redux";
import { register } from "../Redux/userReducer/action";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
//   import { useNavigate } from "react-router-dom";

const initState = {
  userName: "",
  mobile: "",
  email: "",
  password: "",
};

export const SignupForm = () => {
  // const Navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [state, setState] = useState(initState);

  const dispatch = useDispatch();
  const handalChange = (e) => {
    const { name, value } = e.target;

    setState((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handalSubmit = (e) => {
    e.preventDefault();

    dispatch(register(state));
  };
  const handleClick = () => setShow(!show);

  return (
    <form onSubmit={handalSubmit}>
      <FormControl>
        <Input
          name="userName"
          size="md"
          variant="flushed"
          type="text"
          placeholder="Enter Full Name"
          onChange={handalChange}
        />
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl>
        <Input
          name="mobile"
          size="md"
          variant="flushed"
          type="Number"
          placeholder="Enter Phone Number"
          onChange={handalChange}
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
          onChange={handalChange}
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
            onChange={handalChange}
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
          backgroundColor: "#8c52ff",
          color: "white",
        }}
        type="submit"
        value="Register"
      />
      <ToastContainer />
    </form>
  );
};

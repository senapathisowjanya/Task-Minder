import {
    useDisclosure,
    Button,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Image,
    Modal,
    ModalFooter,
    Text,
    Heading,
    Center,
  } from "@chakra-ui/react";
  import { ToastContainer, toast} from "react-toastify";
//   import { Link } from "react-router-dom";
  import { LoginForm } from "../components/LoginForm";
  import logo from "../Assets/Task.png"
  function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <>
        <Button colorScheme="black" variant="link" onClick={onOpen}>
           Login
        </Button>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent style={{ width: "370px" }}>
            <Center >
            <Image
              src={logo}
              alt="error"
            />
            </Center>
  
            <ModalCloseButton />
            <ModalBody>
              <Heading style={{ margin: "25px 0px 20px 0px" }} size="md">
                Login
              </Heading>
              <LoginForm onclose={onClose}/>
            </ModalBody>
  
            <ModalFooter>
              <Text fontSize="md">
                Not registered yet?
                <span onClick={onClose} style={{ color: "#8c52ff" }} to="/signup">
                  Create an Account
                </span> 
              </Text>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <ToastContainer/>
      </>
    );
  }
  export default Login;

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
//   import { Link } from "react-router-dom";
  import {SignupForm} from "../components/SignupForm"
  
  import logo from "../Assets/Task.png"
  function Signup() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <>
        <Button colorScheme="black" variant="link" onClick={onOpen}>
         Sign up - it’s free!
        </Button>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent style={{ width: "370px" }}>
            <Center >
            <Image
              width={300}
              src={logo}
              alt="error"
            />
            </Center>
  
            <ModalCloseButton />
            <ModalBody>
              <Heading style={{ margin: "25px 0px 20px 0px" }} size="md">
                Register
              </Heading>
              <SignupForm/>
            </ModalBody>
            <ModalFooter>
              <Text fontSize="md">
                 Allready have an account? 
                <span onClick={onClose} style={{ color: "#8c52ff" }} to="/signup">
                  Login
                </span> 
              </Text>
            </ModalFooter>
  
          </ModalContent>
        </Modal>
      </>
    );
  }
  export default Signup;
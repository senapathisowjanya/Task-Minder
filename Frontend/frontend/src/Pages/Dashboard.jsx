import { Navbar } from "../Pages/Navbar";
import { Sidebar } from "../Pages/Sidebar";
import "./Dashboard.css";
import { Greeting } from "../components/Greetings";
import {
  Box,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
 
  List,
  ListItem,
  ListIcon,
  
} from "@chakra-ui/react";
import { CheckIcon, ChevronDownIcon ,CheckCircleIcon} from "@chakra-ui/icons";
import { ImUsers, ImLock } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProject, getTask } from "../Redux/taskReducer/action";
import { Addtask } from "../components/Addtask";
import { Edittask } from "../components/Edittask";
import { FcContacts } from "react-icons/fc";

export const Dashboard = () => {
 const dispatch=useDispatch()

 useEffect(()=>{
    dispatch(getTask())
   
  },[])

  useEffect(()=>{
   
    dispatch(getProject())
  },[])

   const task=useSelector((store)=> store.taskReducer.task)
   const project=useSelector((store)=> store.taskReducer.project)
 
  var today = new Date();
  let months = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  );
  let curMonth = months[today.getMonth()];
  let weekday = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );
  let dayOfWeek = weekday[today.getDay()];
  var yyyy = today.getFullYear();

  let date = `${curMonth}, ${dayOfWeek} ${yyyy}`;

  
    

  return (
    <div>
      <Navbar />
      <div className="dash">
        <div style={{ width: "20%", height: "100%" }}>
          <Sidebar />
        </div>
        <div style={{ width: "80%", height: "100%" }}>
          <div className="user-greet">
            <h1
              style={{
                color: "black",
                textAlign: "left",
                marginTop: "20px",
                fontWeight: "bold",
              }}
            >
              Home
            </h1>

            <div style={{ width: "43%", margin: "auto" }}>
              <h3>{date}</h3>
              <Greeting />

              <HStack
                justifyContent={"space-between"}
                spacing="24px"
                bgColor={"#f9f8f8"}
                borderRadius={25}
                marginTop={6}
                paddingRight={3}
              >
                <Box>
                  <Menu>
                    <MenuButton
                      borderRadius={25}
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                    >
                      My week
                    </MenuButton>
                    <MenuList>
                      <MenuItem>My Week</MenuItem>
                      <MenuItem>My Month</MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
                <Box>
                  {" "}
                  <CheckIcon /> 0tasks completed
                </Box>
                <Box>
                  <Button
                    leftIcon={<ImUsers />}
                    variant="link"
                    // colorScheme="blue"
                    // variant="outline"
                  >
                    0collaborators
                  </Button>
                </Box>
              </HStack>
            </div>
          </div>
          <Box className="task">
            <Box className="task-box"  paddingRight={5} paddingLeft={4}>
              <Box style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} >

                <Box style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"25%",height:"12vh"}} >
                <Avatar src="https://bit.ly/broken-link" />
                <h1
                  style={{
                    textAlign: "center",
                    fontSize: "15px",
                    color: "black"
                  }}
                >
                  My Task
                </h1>{" "}
                <ImLock />
                </Box>
                
                  
                 {/* <Button>Click here to add a task</Button> */}
                 <Addtask/>
              </Box>
              <hr/>
            

              <Box style={{overflow:"auto",height:"42vh"}}>
              <List  marginTop={5} textAlign={"left"} spacing={3}>

                {

                   task?.map((task)=>{
                   return <ListItem  text padding={"5px"} >

                     <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div>
                      <ListIcon as={CheckCircleIcon} />
                        {task.task_name}

                        </div>
                        <div>
                           {<Edittask {...task}/>}
                           </div>

                     </div>
                        <hr/>
                  </ListItem>
                   })

                }
               
              </List>
              </Box>
            </Box>
            <Box className="task-box" paddingRight={5} paddingLeft={4}  w={"45%"}>
                      <h1 style={{fontSize:"20px",color:"black",marginBottom:"20px"}}>Projects</h1>
                  
                  <box style={{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"60px 60px 60px", gap:"20px"}}>
                 {
                   project?.map((el)=>{
                   return  <>
                        <div style={{textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",
                            boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}>
                            <FcContacts style={{fontSize:"40px"}}/> <h1 >{el.project_name}</h1> 
                        </div>
                   </>
                   })
                 }
                 <FcContacts/>

                 </box>
                
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};

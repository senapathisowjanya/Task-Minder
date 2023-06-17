import logo from './logo.svg';
import './App.css';

import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Inbox from './components/Inbox';


function App() {
  return (
    <div className="App">
       <Login/>
       <Signup/>
       {/* <Inbox /> */}
    </div>
  );
}

export default App;

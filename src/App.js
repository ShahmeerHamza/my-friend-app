
import './App.css';
import Signin from './component/Signin';
import Signup from './component/Signup';
import {Route, Routes} from "react-router";

function App() {
  return (
    <Routes>
      <Route path = "/"element={<Signin/>} />    
      <Route path = "/Signup"element={<Signup/>} />      
    </Routes>
  );
}

export default App;

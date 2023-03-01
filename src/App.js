// import Home from "./components/Home";
import React from "react";
import Homeposts from "./components/Homeposts";
import Navbar from "./components/Navbar"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Addpost from "./components/Addpost";
function App() {
  return (
    <BrowserRouter>
     <Navbar />
     <Routes >
    <Route exact path="/" element={<Homeposts />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/newpost" element={<Addpost />} />
    </Routes>

    
    </BrowserRouter>
   
  )
}

export default App;

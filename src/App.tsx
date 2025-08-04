import React from "react";
import FullLayout from "./layout/FullLayout";
import { BrowserRouter as Router } from "react-router-dom";
function App(){
  return(
    <Router>
      <FullLayout/> 
    </Router>
       
     
  );
}

export default App
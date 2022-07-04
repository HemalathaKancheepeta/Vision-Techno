import "./VisionApp.css";
import React from "react";
import { Header } from "../Header";
import {Footer} from "../Footer"

import Menu from "../Menu/Menu"




function template() {
  return (
    <div className="vision-app">
    
      <Header/>
      <Menu/>
      <Footer/>
     
    </div>
  );
};

export default template;

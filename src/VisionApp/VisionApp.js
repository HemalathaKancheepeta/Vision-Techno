import React    from "react";
import template from "./VisionApp.jsx";



class VisionApp extends React.Component {
  render() {
    return template.call(this);
  }
}

export default VisionApp;

import Staff from "./Satff";

import React from "react";
import "./staff.css";

// import Media from "media"

class Staffdiv extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const staff1 = {
      src: "https://cdn.pixabay.com/photo/2013/08/08/12/03/business-170645__340.jpg",
      name: "Adrian Scold",
      position: "Financial Director ",
    };
    const staff2 = {
      src: "https://cdn.pixabay.com/photo/2015/12/04/19/20/girl-1076995__340.jpg",
      name: "Katty Nelson",
      position: "Advertising Manager",
    };
    const staff3 = {
      src: "https://cdn.pixabay.com/photo/2017/09/16/17/42/business-woman-2756210__340.jpg",
      name: "Jennie Clarck",
      position: "Secretary",
    };
    return (
      <div className="staff">
        <Staff staff={staff1} />
        <Staff staff={staff2} />
        <Staff staff={staff3} />
      </div>
    );
  }
}

export default Staffdiv;

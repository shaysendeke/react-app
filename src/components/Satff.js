import React from "react";
import "./bakery.css";


// import Media from "media"

class Staff extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
          <section className="staffSection" >
             <img src={this.props.staff.src}></img> 
             <h3>{this.props.staff.name}</h3>
             <p>{this.props.staff.position}</p>
          </section>
      )};
  }


export default Staff;

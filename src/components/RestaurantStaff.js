import React from "react";
import "./restaurant.css";


// import Media from "media"

class RestaurantStaff extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
          <section className="restaurantSection" >
             <img src={this.props.staff.src}></img> 
             <h3>{this.props.staff.title}</h3>
             <h6>{this.props.staff.info}</h6>
          </section>
      )};
  }


export default RestaurantStaff;

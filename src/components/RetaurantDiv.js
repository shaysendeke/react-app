import RestaurantStaff from "./RestaurantStaff";

import React from "react";
import "./restaurant.css";


// import Media from "media"

class RestaurantDiv extends React.Component {
  constructor(props) {
    super();
  }

  render() {
      const executiveChef = {
        src: "https://cdn.pixabay.com/photo/2019/11/14/11/10/chef-4625935__340.jpg",
        title: "Conor Quinn",
        info: "Executive Chef"
      }
      const restaurantManager ={
          src: "https://cdn.pixabay.com/photo/2017/11/02/14/27/model-2911332__340.jpg",
          title: "Samuel Chick",
          info: "Restaurant Manager"
          }
          const coChief1 = {
              src: "https://cdn.pixabay.com/photo/2013/02/13/22/43/kitchen-81493__340.jpg",
              title: "Fred Morrison",
              info: "Sou Chef."             
          }
          const coChief2 = {
            src: "https://cdn.pixabay.com/photo/2013/10/17/14/11/cook-196932__340.jpg",
            title: "Celia Almeda",
            info: "Sou Chef."
          }
              
    return (
        <div className="restaurant">
         <RestaurantStaff staff = {executiveChef}/>
         <RestaurantStaff staff = {restaurantManager}/>
         <RestaurantStaff staff = {coChief1}/>
         <RestaurantStaff staff = {coChief2}/>
        </div>

        )};

  }


export default RestaurantDiv;

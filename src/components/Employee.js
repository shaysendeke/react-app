import React from "react";
import "./Employees.css"

// import Media from "media"

class Employee extends React.Component {
  constructor(jj) {
    super();
  }

  render() {
    return (
      <div>
      <div className="employees">
        <h1>{this.props.name}</h1>
        <img class ="imagesEmployees"alt="" src={this.props.image}></img>
      </div>
      <div className="showEmployees">

      </div>
          </div>
    );
  }
}

export default Employee;

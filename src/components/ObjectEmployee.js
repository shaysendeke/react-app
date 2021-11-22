import React from "react";

// import Media from "media"

class EmployeeObject extends React.Component {
  constructor(props) {
    super();
}

render() {
  
    return (
      <div>
        <h3>
          {this.props.employee.name}
          {this.props.employee.age}
        </h3>
      </div>
    );
  }
}

export default EmployeeObject;

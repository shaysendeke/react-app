import React from "react";
import "./footer.css";


// import Media from "media"

class Footer extends React.Component {
  constructor(jj) {
    super();
  }

  render() {
    return (
      <footer className="footer">
        <p>contact us here</p>
        <form>
          <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname"/><br/><br/>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" /><br/><br />
        <input type="submit" value="Submit" />
        
        </form>
      </footer>
      )};
  }


export default Footer;

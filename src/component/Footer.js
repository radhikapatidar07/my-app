import React from "react";
import CommonContext from "./CommonContext";

class Footer extends React.Component {
  render() {
    return (
      <CommonContext.Consumer>
        {({ color }) => (
          <h1 className="Footer" style={{ backgroundColor: color }}>
            Hello, This is the Footer Page
          </h1>
        )}
      </CommonContext.Consumer>
    );
  }
}
export default Footer;

import React from "react";
import CommonContext from "./CommonContext";

class UpdateButton extends React.Component {
  render() {
    return (
      <CommonContext.Consumer>
        {({ updateColor }) => (
          <div>
            <button onClick={() => updateColor("Yellow")}>
              Update Yellow button
            </button>
            <button onClick={() => updateColor("blue")}>
              Update Blue button
            </button>
            <button onClick={() => updateColor("red")}>
              Update red button
            </button>
          </div>
        )}
      </CommonContext.Consumer>
    );
  }
}
export default UpdateButton;

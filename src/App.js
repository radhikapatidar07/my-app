import logo from "./logo.svg";
import "./App.css";
import CommonContext from "./component/CommonContext";
import Main from "./component/Main";
import UpdateButton from "./component/UpdateButton";
import Header from "./component/Header";
import Footer from "./component/Footer";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.updateColor = (color) => {
      this.setState({
        color: color,
      });
    };
    this.state = {
      color: "green",
      updateColor: this.updateColor,
    };
  }
  render() {
    return (
      <CommonContext.Provider value={this.state}>
        <Header />
        <h1>Complete and easy exam for Context API</h1>
        <Main />
        <UpdateButton />
        <Footer />
      </CommonContext.Provider>
    );
  }
}

export default App;

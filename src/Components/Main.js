import React, { Component } from "react";
 
class Main extends Component {
  render() {
    return (
        <div className="main">
          <header className="header">
            <h1>Simple-chat v2.0</h1>
          </header>
          <ul className="menu">
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
          </ul>
        </div>
    );
  }
}
 
export default Main;
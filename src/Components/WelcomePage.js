import React from "react";
import "../Style/WelcomePage.css";

export default class WelcomePage extends React.Component {
  update = () => {
    let location = window.location.href;
    location = location.split("&");
    let UserId = location[0].split("=")[1],
      sigendIn = location[1].split("=")[1];

    this.props.onUpdate(UserId, sigendIn);
  };

  componentWillMount() {
    if (
      window.location.href !==
      "http://localhost:3000/" //http://shenkar.html5-book.co.il/2018-2019/dcs/dev_276/
    )
      this.update();
  }

  render() {
    return (
      <div className="welcome">
        <h1>WELCOME TO RETRO</h1>
        <h3>THE BEST OLD STYLE PORTFOLIO</h3>
        <div className="signIn">
          <h5>TO SIGN IN WITH LINKEDIN</h5>
          <a href="https://portfolio-builder-server-side.herokuapp.com/">
            CLICK HERE
          </a>
          <div className="moustacheToMove">
            <div className="moustache" />
          </div>
        </div>
      </div>
    );
  }
}

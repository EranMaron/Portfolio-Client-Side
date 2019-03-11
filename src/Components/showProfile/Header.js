import React, { Component } from "react";
import Scrollspy from "react-scrollspy";
import "../../Style/Profile.css";

class Header extends Component {
  active = {
    fontSize: "2vw",
    color: "purple",
    borderBottom: "solid 2px 000"
  };

  render() {
    return (
      <div id="myHeader">
        <Scrollspy
          items={[
            "sliderSection",
            "aboutSection",
            "positionSection",
            "videosSection"
          ]}
          currentClassName="is-current"
        >
          <ul className="navbarItems">
            <li className="navItem">
              <a className="nav-link" href="#sliderSection">
                HOME
              </a>
            </li>
            <li className="navItem">
              <a href="#aboutSection">ABOUT ME</a>
            </li>
            <i id="logo" className="fas fa-briefcase" />
            <li className="navItem">
              <a href="#positionSection">MY POSITION</a>
            </li>
            <li className="navItem">
              <a href="#videosSection">MY VIDEOS</a>
            </li>
          </ul>
          <div className="userContainer">
            <img id="profileImg" src={this.props.profileImg} />
            <div className="nameContainer">
              <h4 className="userName">
                {this.props.firstName} {this.props.lastName}
              </h4>
            </div>
          </div>
        </Scrollspy>
        <hr className="sectionSeperatoe" />
      </div>
    );
  }
}

export default Header;

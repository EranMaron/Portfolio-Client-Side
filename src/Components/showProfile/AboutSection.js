import React, { Component } from "react";

class AboutSection extends Component {
  render() {
    return (
      <div id="aboutSection">
        <hr className="sectionSeperator" />
        <h1 className="sectionTitle">ABOUT ME</h1>
        <hr className="separator" /> XXX <hr className="separator" />
        <div className="aboutContainer">
          <div className="aboutContent">
            <img src={this.props.userImg} />
            <div className="summaryContainer">
              <h3>{this.props.headLine}</h3>
              <p>{this.props.profileSummary}</p>
            </div>
          </div>
        </div>
        <hr className="sectionSeperator" />
      </div>
    );
  }
}

export default AboutSection;

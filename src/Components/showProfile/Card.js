import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="cardContainer">
        <div className="card">
          <div className="card-img-top">
            <h3 className="connections">{this.props.connections}</h3>
          </div>
          <div className="card-body">
            <p className="card-text">
              {this.props.firstName} has {this.props.connections} connections in
              his Linkedin profile.
              <br />
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{this.props.companyName}</h5>
            <p className="card-text">
              {this.props.firstName} works at the {this.props.companyName} as a{" "}
              {this.props.title}.
              <br />
              {this.props.summary}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

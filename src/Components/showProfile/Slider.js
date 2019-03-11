import React, { Component } from "react";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    this.setState({
      photos: this.props.photos
    });
  }

  render() {
    return (
      <div id="slider">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src={this.props.photos[0]}
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={this.props.photos[1]}
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={this.props.photos[2]}
                alt="Third slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={this.props.photos[3]}
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Slider;

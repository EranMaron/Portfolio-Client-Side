import React, { Component } from "react";
import Header from "./Header";
import SliderSection from "./SliderSection";
import AboutSection from "./AboutSection";
import PositionSection from "./PositionSection";
import VideoSection from "../VideosSection/VideoSection";

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      profile: {
        currentPosition: {
          title: "",
          company: "",
          summary: ""
        },
        headLline: "",
        summary: "",
        numOfConnections: 0,
        profileImg: ""
      },
      photos: [],
      videos: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      `https://portfolio-builder-server-side.herokuapp.com/showprofile?id=${
        this.props.userId
      }`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          id: data.id,
          firstName: data.firstName,
          lastName: data.lastName,
          profile: {
            currentPosition: {
              title: data.profile.currentPosition.title,
              company: data.profile.currentPosition.company,
              summary: data.profile.currentPosition.summary
            },
            headLine: data.profile.headLine,
            summary: data.profile.summary,
            numOfConnections: data.profile.numOfConnections,
            profileImg: data.profile.profilePicture
          },
          photos: data.photos,
          videos: data.videos,
          isLoaded: true
        });
      });
  }

  render() {
    if (this.state.isLoaded === false) {
      return (
        <div className="PortfolioLoaderContainer">
          <div class="container">
            <div class="dash uno" />
            <div class="dash dos" />
            <div class="dash tres" />
            <div class="dash cuatro" />
          </div>
        </div>
      );
    }
    return (
      <React.Fragment>
        <Header
          profileImg={this.state.profile.profileImg}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
        />
        <SliderSection
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          photos={this.state.photos}
        />
        <AboutSection
          userImg={this.state.profile.profileImg}
          profileSummary={this.state.profile.summary}
          headLine={this.state.profile.headLine}
        />
        <PositionSection
          connections={this.state.profile.numOfConnections}
          firstName={this.state.firstName}
          company={this.state.profile.currentPosition.company}
          summary={this.state.profile.currentPosition.summary}
          title={this.state.profile.currentPosition.title}
        />
        <VideoSection userId={this.props.userId} />
      </React.Fragment>
    );
  }
}

export default Portfolio;

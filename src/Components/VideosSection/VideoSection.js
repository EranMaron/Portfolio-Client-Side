import React from "react";
import Video from "./Video";
import VideoDialog from "./VideoDialog";
import "../../Style/videosSection.css";

export default class VideoSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], isOpen: false, videoId: null };
  }

  add = ({ id, title, description, thumbnail }) => {
    this.setState(prevState => ({
      videos: [
        ...prevState.videos,
        {
          id: id,
          title: title,
          description: description,
          thumbnail: thumbnail,
          url: `https://www.youtube.com/watch?v=${id}`
        }
      ]
    }));
  };

  componentDidMount() {
    const url = `https://portfolio-builder-server-side.herokuapp.com/showProfile?id=${
      this.props.userId
    }`;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        data.videos.map(item => {
          let id = item.split("=")[1];
          fetch(
            `https://portfolio-builder-server-side.herokuapp.com/getVideoDetails?id=${id}`
          )
            .then(response => {
              return response.json();
            })
            .then(data => {
              this.add({
                id: data.id,
                title: data.title,
                description: data.description,
                thumbnail: data.thumbnail
              });
            });
        });
      })
      .catch(err => console.log(err));
  }

  eachVideo = (item, i) => {
    return <Video item={item} key={i} onClick={this.playVideo} />;
  };

  playVideo = videoId => {
    this.setState({ videoId: videoId, isOpen: true });
  };

  render() {
    if (this.state.isOpen === true)
      return (
        <div id="videosSection">
          <VideoDialog
            id={this.state.videoId}
            isOpen={this.state.isOpen}
            onClose={e => this.setState({ isOpen: false })}
          />
        </div>
      );
    else {
      return (
        <div id="videosSection">
          <h1 className="sectionTitle">VIDEOS</h1>
          <hr className="separator" /> XXX <hr className="separator" />
          <div className="videos">{this.state.videos.map(this.eachVideo)}</div>
        </div>
      );
    }
  }
}

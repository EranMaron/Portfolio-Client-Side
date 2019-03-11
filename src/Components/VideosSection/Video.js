import React from "react";

export default class Video extends React.Component {
  handleClick = () => {
    this.props.onClick(this.id);
  };

  render() {
    const item = this.props.item;
    let singer = item.title.split("-")[0];
    let songName = "";
    if (item.title.split("-")[1] !== undefined)
      songName = item.title.split("-")[1].split("[")[0];
    return (
      <div
        className="video-container"
        ref={(this.id = item.id)}
        value="click to listen"
        onClick={this.handleClick}
      >
        <div className="video">
          <img src={item.thumbnail} alt="" />
        </div>
        <div className="whiteCircle" />
        <h2 className="songName">{songName}</h2>
        <h5 className="singer">{singer}</h5>
      </div>
    );
  }
}

import React, { Component } from "react";
import "../../Style/videosSection.css";

export default class VideoDialog extends Component {
  render() {
    let src = `https://www.youtube.com/embed/${this.props.id}`;
    let dialog = (
      <div className="dialog">
        <button className="dialogCloseButton" onClick={this.props.onClose}>
          X
        </button>
        <div className="ui embed">
          <iframe
            style={{ height: 500, maxWidth: 800, width: "100%" }}
            title="video player"
            src={src}
          />
        </div>
      </div>
    );

    if (!this.props.isOpen) {
      dialog = null;
    }
    return <div className="dialogContainer">{dialog}</div>;
  }
}

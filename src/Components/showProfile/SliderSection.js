import React, {Component} from 'react';
import Slider from './Slider';



class SlideSection extends Component {

    constructor() {
        super();
        this.state = {
            photos: [],
            isLoaded: false
        }
    }


    render() {
        return (
            <div id="sliderSection">
                <hr className="sectionSeperator" />
                <h1 className="sectionTitle">RETRO</h1>
                <div className="subtitle">
                    <p>OLD STYLE PORTFOLIO</p>
                </div>
                <Slider photos={this.props.photos} />
                <p className="sliderSummary">
                    HELLO, I'M {this.props.firstName} {this.props.lastName}
                    <br />
                    WELCOME TO RETRO, MY WONDERFUL PORTFOLIO
                </p>
                <hr className="sectionSeperator" />
            </div>
        )
    }
}

export default SlideSection;
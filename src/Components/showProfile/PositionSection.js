import React, {Component} from 'react';
import Card from './Card';


class PositionSection extends Component {
    render() {
        return (
            <div id="positionSection">
                <hr className="sectionSeperator" />
                <h1 className="sectionTitle">MY POSITION</h1>
                <hr className="separator" /> XXX <hr className="separator" />
                <Card
                    connections={this.props.connections}
                    firstName={this.props.firstName}
                    companyName={this.props.company}
                    summary={this.props.summary}
                    title={this.props.title}
                />

            </div>
        )
    }
}

export default PositionSection;
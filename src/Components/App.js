import React, {Component} from "react";
import WelcomePage from "./WelcomePage";
import FormQuestions from "./questions/FormQuestions";
import VideoSelection from "./VideoSelection/VideoSelection";
import Portfolio from "./showProfile/Portfolio";
import CancelledPage from "./Cancelled";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      componentToRender: 0,
      userId: null,
      singedIn: null
    };
  }

  onUpdate = (userId, singedIn) => {
    if (singedIn === "error" || userId === "error") {
      this.setState({
        componentToRender: 4
      });
    }
    if (singedIn === "false") {
      this.setState({
        userId: userId,
        singedIn: singedIn,
        componentToRender: 1
      });
    } else if (singedIn === "true") {
      this.setState({
        userId: userId,
        singedIn: singedIn,
        componentToRender: 3
      });
    }
  };

  toVideoSelection = () => {
    this.setState({componentToRender: 2});
  };

  toShowProfile = () => {
    this.setState({componentToRender: 3});
  };

  render() {
    if (this.state.componentToRender === 0)
      return <WelcomePage onUpdate={this.onUpdate} />;
    else if (this.state.componentToRender === 1)
      return (
        <FormQuestions
          userId={this.state.userId}
          onUpdate={this.toVideoSelection}
        />
      );
    else if (this.state.componentToRender === 2) {
      return (
        <VideoSelection
          userId={this.state.userId}
          onUpdate={this.toShowProfile}
        />
      );
    } else if (this.state.componentToRender === 3)
      return <Portfolio userId={this.state.userId} />;
    else if (this.state.componentToRender === 4)
      return <CancelledPage />;
  }
}

export default App;

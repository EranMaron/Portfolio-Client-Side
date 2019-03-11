import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const styles = {
  button: {
    margin: "5vw 2vw"
  },
  textField: {
    width: "50vw",
    margin: "2vw 2vw 0 2vw"
  }
};

export class FourthQuestion extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextQuestion();
  };

  back = e => {
    e.preventDefault();
    this.props.prevQuestion();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <MuiThemeProvider>
          <div className="questionPage">
            <h1>You are almost there...</h1>
            <h2>What is your favorite place in the world?</h2>
            <TextField
              style={styles.textField}
              hintText="Enter Your Answer Here"
              floatingLabelText="Answer"
              onChange={handleChange("answer4")}
              defaultValue={values.answer4}
            />
            <br />
            <RaisedButton
              label="Back"
              primary={true}
              style={styles.button}
              onClick={this.back}
            />
            <RaisedButton
              label="Next"
              primary={true}
              style={styles.button}
              onClick={this.continue}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default FourthQuestion;

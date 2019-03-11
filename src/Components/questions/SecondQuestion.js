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

export class SecondQuestion extends Component {
  next = e => {
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
            <h1>Just four more question to go...</h1>
            <h2>What is your main hobby?</h2>
            <TextField
              style={styles.textField}
              hintText="Enter Your Answer Here"
              floatingLabelText="Answer"
              onChange={handleChange("answer2")}
              defaultValue={values.answer2}
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
              onClick={this.next}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default SecondQuestion;

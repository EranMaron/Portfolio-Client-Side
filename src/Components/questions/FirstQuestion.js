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

export class FirstQuestion extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextQuestion();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <MuiThemeProvider>
          <div className="questionPage">
            <h1>
              Before we create your awasome portfolio, please answer a few
              questions
            </h1>
            <h2>What is your favorite animal?</h2>
            <TextField
              style={styles.textField}
              hintText="Enter Your Answer Here"
              floatingLabelText="Answer"
              onChange={handleChange("answer1")}
              defaultValue={values.answer1}
            />
            <br />
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

export default FirstQuestion;

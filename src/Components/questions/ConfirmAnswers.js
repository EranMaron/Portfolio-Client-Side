import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { List, ListItem } from "material-ui/List";

const styles = {
  button: {
    margin: "5vw 2vw"
  },
  list: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "0 auto",
    padding: "5vw 0 0 0",
    width: "80vw"
  },
  listItem: {
    fontSize: "1.5vw",
    color: "#000"
  }
};

export class ConfirmAnswers extends Component {
  confirm = e => {
    e.preventDefault();
    this.props.confirmQuestion();
  };

  back = e => {
    e.preventDefault();
    this.props.prevQuestion();
  };

  render() {
    const {
      values: { answer1, answer2, answer3, answer4, answer5 }
    } = this.props;
    return (
      <div>
        <MuiThemeProvider>
          <div className="questionPage">
            <List style={styles.list} className="listContainer">
              <ListItem
                style={styles.listItem}
                primaryText="What is your favorite animal?"
                secondaryText={answer1}
              />
              <ListItem
                style={styles.listItem}
                primaryText="What is your main hobby?"
                secondaryText={answer2}
              />
              <ListItem
                style={styles.listItem}
                primaryText="What do you like to eat the most?"
                secondaryText={answer3}
              />
              <ListItem
                style={styles.listItem}
                primaryText="What is your favorite place in the world?"
                secondaryText={answer4}
              />
              <ListItem
                style={styles.listItem}
                primaryText="Who is the singer or the band you love the most?"
                secondaryText={answer5}
              />
            </List>
            <br />
            <RaisedButton
              label="Back"
              primary={true}
              style={styles.button}
              onClick={this.back}
            />
            <RaisedButton
              label="Confirm"
              primary={true}
              style={styles.button}
              onClick={this.confirm}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default ConfirmAnswers;

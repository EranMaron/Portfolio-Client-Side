import React, { Component } from "react";
import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import ThirdQuestion from "./ThirdQuestion";
import FourthQuestion from "./FourthQuestion";
import FifthQuestion from "./FifthQuestion";
import ConfirmAnswers from "./ConfirmAnswers";

import "../../Style/questions.css";

class FormQuestions extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: "",
      answer5: "",
      isLoaded: true,
      progress: 20,
      nextFleg: true,
      backFleg: false
    };
  }

  // Proceed to next queastion
  nextQuestion = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev queastion
  prevQuestion = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  confirmQuestion = () => {
    let answers = {
      answer1: this.state.answer1,
      answer2: this.state.answer2,
      answer3: this.state.answer3,
      answer4: this.state.answer4,
      answer5: this.state.answer5
    };
    fetch(
      `https://portfolio-builder-server-side.herokuapp.com/questions?id=${
        this.props.userId
      }`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `a=${answers.answer1}&b=${answers.answer2}&c=${
          answers.answer3
        }&d=${answers.answer4}&e=${answers.answer5}`
      }
    )
      .then(res => res.json())
      .then(this.props.onUpdate())
      .catch(json => alert("Error"));
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  componentDidMount() {
    fetch(
      `https://portfolio-builder-server-side.herokuapp.com/showProfile?id=${
        this.props.userId
      }`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          firstName: data.firstName,
          isLoaded: true
        });
      });
  }

  render() {
    const { step, answer1, answer2, answer3, answer4, answer5 } = this.state;
    const values = { answer1, answer2, answer3, answer4, answer5 };

    if (this.state.isLoaded === false)
      return <h1 className="loading">Loading...</h1>;

    switch (step) {
      case 1:
        return (
          <FirstQuestion
            nextQuestion={this.nextQuestion}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <SecondQuestion
            nextQuestion={this.nextQuestion}
            prevQuestion={this.prevQuestion}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <ThirdQuestion
            nextQuestion={this.nextQuestion}
            prevQuestion={this.prevQuestion}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <FourthQuestion
            nextQuestion={this.nextQuestion}
            prevQuestion={this.prevQuestion}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <FifthQuestion
            nextQuestion={this.nextQuestion}
            prevQuestion={this.prevQuestion}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 6:
        return (
          <ConfirmAnswers
            confirmQuestion={this.confirmQuestion}
            prevQuestion={this.prevQuestion}
            values={values}
          />
        );
    }
  }
}

export default FormQuestions;

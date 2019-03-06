import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const styles = theme => ({
  text: {
    display: "block",
    width: "200px"
  },
  button: {
    margin: "5px",
    width: "200px"
  },
  container: {
    display: "flex",
    justifyContent: "center"
  }
});

class Name extends Component {
  state = {
    Ok: false,
    name: ""
  };
  handleName = e => {
    this.setState({ name: e.target.value });
  };

  submitName = e => {
    e.preventDefault();
    if (this.state.name === "") {
      alert("field cannot be empty!");
    } else {
      axios.post("/registerUser", { name: this.state.name }).then(res => {
        console.log(res);
      });
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <form noValidate autoComplete="off">
          <TextField
            id="name"
            label="Name"
            margin="normal"
            variant="outlined"
            className={classes.text}
            onChange={this.handleName}
            value={this.state.name}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            type="submit"
            onClick={this.submitName}
          >
            Ok!
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(Name);

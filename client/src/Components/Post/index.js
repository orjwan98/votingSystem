import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import down from "../../assets/down.png";
import up from "../../assets/up.png";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    margin: "auto",
    width: "50%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: "bold",
    color: "white"
  },

  expand: {
    fontSize: theme.typography.pxToRem(12),
    color: "white"
  },

  title: {
    backgroundColor: "blue"
  },
  imgcontainer: {
    display: "inline-block"
  },
  button: {
    margin: "10px"
  }
});

const Post = ({ classes, key, title, post, upvotes, downvotes }) => {
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary className={classes.title}>
          <Typography className={classes.heading}>{title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{post}</Typography>
        </ExpansionPanelDetails>
        <Button color="primary" className={classes.button}>
          Upvote {upvotes}
        </Button>
        <Button color="primary" className={classes.button}>
          Downvote {downvotes}
        </Button>
      </ExpansionPanel>
    </div>
  );
};

Post.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Post);

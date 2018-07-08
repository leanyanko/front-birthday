import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import RowingIcon from "@material-ui/icons/Rowing";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import EditIcon from "@material-ui/icons/Edit";
import CreateIcon from "@material-ui/icons/CreateNewFolder";
import Login from "./Login";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDrawer: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({
      showDrawer: !this.state.showDrawer
    });
  }

  render() {
    const {
      classes,
      viewProfile,
      viewBirthdays,
      editProfile,
      createBirthday
    } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List component="nav">
          <ListItem button onClick={viewProfile}>
            <ListItemIcon>
              <RowingIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button onClick={viewBirthdays}>
            <ListItemIcon>
              <MotorcycleIcon />
            </ListItemIcon>
            <ListItemText primary="Birthdays!" />
          </ListItem>
        </List>
        <Divider />
        <List component="nav">
          <ListItem button onClick={editProfile}>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText primary="Edit Profile" />
          </ListItem>
          <ListItem button onClick={createBirthday}>
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="Create a Birthday" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon onClick={this.toggleDrawer} />
            </IconButton>
            <Drawer open={this.state.showDrawer} onClose={this.toggleDrawer}>
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer}
                onKeyDown={this.toggleDrawer}
              >
                {sideList}
              </div>
            </Drawer>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              BIRTHDAYS
            </Typography>
            <Button color="inherit">Login</Button>
            <Login />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);

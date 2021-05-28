import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign: "left",
    },
  })
);

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#FF7676" }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            NotiCovid
          </Typography>
          <Button color="inherit" href="/">
            Inicio
          </Button>
          <Button color="inherit" href="/about">
            Sobre nosotros
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;

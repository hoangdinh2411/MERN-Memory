import { useState, useEffect } from "react";
import { AppBar, Typography, Button, Toolbar, Avatar } from "@material-ui/core";
import useStyles from "./styles.js";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "store/auth/actions";
import { useNavigate } from "react-router-dom";
import decode from "jwt-decode";
function AppBarComponent() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const navigate = useNavigate();
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch(signOut());
      }
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [navigate]);

  const logout = () => {
    dispatch(signOut());
    setUser(null);
    navigate("/auth");
  };
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/">
        <Typography variant="h2" align="center" className={classes.heading}>
          Memories
        </Typography>
      </Link>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user?.result.name}
              src={user?.result.imageUrl}
            >
              {user?.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user?.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Link to="/auth">
            <Button variant="contained" size="large" color="primary">
              Login
            </Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default AppBarComponent;

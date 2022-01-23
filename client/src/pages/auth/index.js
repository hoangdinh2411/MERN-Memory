import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import useStyles from "./styles";
import Input from "./input";
import { GoogleLogin } from "react-google-login";
import Icon from "./icon";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { signIn} from "store/auth/actions";
import {useNavigate  } from 'react-router-dom'
import { signInMiddleware, signUpMiddleware } from 'store/auth/authThunks';



const initialState = {
  firstName: '',
  lastName: '',
  email:'',
  password: '',
  confirmPassword :''

}
const Signup = () => {
  const [formData, setFormData] = useState(initialState)
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [signInError, setSignInError] = useState('')
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate()
  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    dispatch(signIn({result, token}))
    setSignInError('')
    navigate('/')

  };
  const googleError = () => {
    setSignInError("Google Sign in was unsuccessfully. Please try again")
  };

  const handleSubmit =(e)=>{
    e.preventDefault()
    if(isSignup){
      dispatch(signUpMiddleware(formData, navigate))
      
    }else{
    dispatch(signInMiddleware(formData, navigate))

    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Typography component="h5" variant="h5">
          {signInError}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  handleChange={handleChange}
                  name="firstName"
                  label="First Name"
                  autoFocus
                  half
                />
                <Input
                  handleChange={handleChange}
                  name="lastName"
                  label="Last Name"
                  half
                />
              </>
            )}
            <Input
              handleChange={handleChange}
              name="email"
              label="Email Address"
              type="email"
            />
            <Input
              handleChange={handleChange}
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                handleChange={handleChange}
                name="confirmPassword"
                label="Repeat Password"
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin
            clientId="930793740422-ke9ai0niemmfapabe4pog0os7o9lk3tr.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            cookiePolicy="single_host_origin"
            onSuccess={googleSuccess}
            onError={googleError}
          />
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Signup;

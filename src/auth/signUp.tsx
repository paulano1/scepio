import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';

import Box from '@mui/material/Box';
import GoogleButton from 'react-google-button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  getAuth,
  signInWithPopup,
} from 'firebase/auth';
import { app } from '../firebase-config';
import { Alert } from '@mui/material';
import { shallow } from 'zustand/shallow';
import { useStore } from '../store/store';
import { GoogleAuthProvider } from "firebase/auth";

const selector = (state: {
  setCurrentPage: any;
  setUserName: any;
  setSignedIn: any;
  userEmailAddress: any;
  setUserEmailAddress: any;
}) => ({
  setUserName: state.setUserName,
  setSignedIn: state.setSignedIn,
  setCurrentPage : state.setCurrentPage,
  userEmailAddress: state.userEmailAddress,
  setUserEmailAddress: state.setUserEmailAddress,
});


function Copyright(props: any) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link
        color='inherit'
        href='https://github.com/paulano1/scepio'
      >
        Scepio Tree Hacks
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#4c8bf5',
    },
  },
});

export function SignUp() {
  const { setSignedIn, setUserName, setCurrentPage, setUserEmailAddress } = useStore(selector, shallow);
  const [errorMsg, setErrorMsg] = React.useState('');
  const handleGoogleSignUp = () => {
    const provider = new GoogleAuthProvider();
    const authentication = getAuth(app);
    signInWithPopup(authentication, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info
        const user = result.user;
        setSignedIn(true);
        setUserName(user?.displayName);
        setUserEmailAddress(user?.email);
        setCurrentPage('home');
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        // The email of the user's account used.
        setErrorMsg(errorMessage);
      });
      
  };
  return (
    <ThemeProvider theme={theme}>
      <Container
        component='main'
        maxWidth='xs'
        sx={{
          backgroundImage: 'url(https://i.ibb.co/sWFNCcJ/Onboarding.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100%',
        }}
      >
        {errorMsg && <Alert severity='error'>{errorMsg}</Alert>}
        <CssBaseline />
        <Box
          sx={{
            marginTop: 70,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <GoogleButton onClick={handleGoogleSignUp}>
            Register with google
          </GoogleButton>
        </Box>

        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

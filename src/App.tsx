import React, { useEffect } from 'react';
import { SignUp } from './auth';
import {useStore} from './store/store';
import { shallow } from 'zustand/shallow';
import { HomePage } from './homePage';
import { ChatUI } from './chat';
import './App.css';
import { Presence, User, UserStatus } from '@chatscope/use-chat';
import { Container } from '@mui/system';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import HomeIcon from '@mui/icons-material/Home';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const selector = (state: {
  userName: any; signedIn: any; setSignedIn: any; currentPage: any; setCurrentPage: any; 
}) => ({
  userName: state.userName,
  signedIn: state.signedIn,
  setSignedIn : state.setSignedIn,
  currentPage: state.currentPage,
  setCurrentPage: state.setCurrentPage,
});

const emily = new User({
  id: '1',
  presence: new Presence({ status: UserStatus.Available, description: '' }),
  firstName: '',
  lastName: '',
  username: 'emily',
  email: '',
  avatar: '',
  bio: '',
});

export const Controller = () => {
  const { userName, currentPage } = useStore(selector, shallow);
  switch (currentPage) {
    case 'signUp':
      return <SignUp />;
    case 'home':
      return <HomePage />;
    case 'chat':
      return <ChatUI />;
    default:
      return <div>404</div>;
  }
};

function App() {
  const [value, setValue] = React.useState(0);
  const { currentPage, setCurrentPage } = useStore(selector, shallow);
  useEffect(() => {
    console.log('inUSEEFFECT', currentPage);
  }, [currentPage]);

  return (
    <>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          padding: '0',
          margin: '0',
        }}
      >
        <Controller />
      </Container>
      {currentPage === 'signUp' ? null :
      <Paper
        sx={{ position: 'fixed', bottom: 1, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label='Health'
            onClick={() => {
              setCurrentPage('health');
            }}
            icon={<MonitorHeartIcon />}
          />
          <BottomNavigationAction
            label='Home'
            onClick={() => {
              setCurrentPage('home');
              console.log(currentPage);
            }}
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            label='Chat'
            onClick={() => {
              setCurrentPage('chat');
            }}
            icon={<ForumIcon />}
          />
          <BottomNavigationAction
            label='Nearby'
            onClick={() => {
              setCurrentPage('nearby');
            }}
            icon={<LocationOnIcon />}
          />
        </BottomNavigation>
      </Paper>
}
    </>
  );
}

export default App;

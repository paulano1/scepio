import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, BottomNavigation, BottomNavigationAction, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestoreIcon from '@mui/icons-material/Restore';
import { useStore } from '../store/store';
import { shallow } from 'zustand/shallow';
import { Box } from '@mui/system';
import { HomePageQuestion } from './homePageQuestion';


const selector = (state: {
  setCurrentPage: any;
  userName: any;
}) => ({
  setCurrentPage: state.setCurrentPage,
  userName: state.userName,
});


const theme = createTheme({
  palette: {
    primary: {
      main: '#4c8bf5',
    },
  },
});

export function HomePage() {
  const [value, setValue] = React.useState(0);
  const { setCurrentPage, userName } = useStore(selector, shallow);

  return (
    <ThemeProvider theme={theme}>
      <Container
        component='main'
        maxWidth='sm'
        sx={{
          marginTop: -1,
          backgroundColor: '#FFFF',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 2,
            marginBottom: 0,
            backgroundColor: '#FFFF',
          }}
        >
          <Avatar
            sx={{
              m: 1,
              bgcolor: 'secondary.main',
              marginLeft: 'auto',
              marginRight: 1,
            }}
          ></Avatar>
        </Box>
        <div
          style={{
            fontFamily: 'Alegreya',
            fontSize: '20px',
          }}
        >
          Welcome back, {userName}!
        </div>
        <HomePageQuestion />

        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label='Recents'
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label='Favorites'
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label='Nearby'
            icon={<LocationOnIcon />}
          />
        </BottomNavigation>
      </Container>
    </ThemeProvider>
  );
}

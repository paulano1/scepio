import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, BottomNavigation, BottomNavigationAction, Grid, IconButton, Paper, Stack, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestoreIcon from '@mui/icons-material/Restore';
import { useStore } from '../store/store';
import { shallow } from 'zustand/shallow';
import { Box } from '@mui/system';
import { HomePageQuestion } from './homePageQuestion';
import ForumIcon from '@mui/icons-material/Forum';
import HomeIcon from '@mui/icons-material/Home';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import ProgressCircle from './progressCircle';


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
  const [showQuestion, setShowQuestion] = React.useState(true);
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
          <div
            style={{
              fontFamily: 'Alegreya',
              fontSize: '25px',
            }}
          >
            Welcome back, {userName}!
          </div>
          <Avatar
            sx={{
              m: 1,
              bgcolor: 'secondary.main',
              marginLeft: 'auto',
              marginRight: 1,
            }}
          ></Avatar>
        </Box>

        {showQuestion ? (
          <HomePageQuestion
            open={showQuestion}
            setOpen={setShowQuestion}
          />
        ) : null}
        <Stack>
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              sm={6}
            >
              <Paper
                sx={{
                  display: 'flex',
                  marginTop: 2,
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderRadius: '20px',
                  backgroundColor: '#FAD3B0',
                }}
                elevation={3}
              >
                <Box>
                  <Typography
                    sx={{
                      fontFamily: 'Alegreya',
                      fontSize: '20px',
                      fontWeight: 'bold',
                      marginBottom: 0,
                      alignItems: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                    }}
                  >
                    SORC Score
                  </Typography>
                  <ProgressCircle progress={20} />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

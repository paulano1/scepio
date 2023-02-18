import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, BottomNavigation, BottomNavigationAction, Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Paper, Stack, Typography } from '@mui/material';
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
          <Paper
            sx={{
              display: 'flex',
              marginTop: 2,
              borderRadius: '20px',
              backgroundColor: '#FFCBCB',
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
                  alignItems: 'left',
                  justifyContent: 'left',
                  display: 'flex',
                  marginLeft: 2,
                  marginTop: 2,
                }}
              >
                Medications for today:
              </Typography>
              <Grid
                container
                direction='row'
                justifyContent='flex-start'
                alignItems='flex-start'
                spacing={2}
                sx={{
                  marginLeft: 2,
                  marginTop: 2,
                  marginBottom: 1,
                }}
              >
                <Grid
                  item
                  xs={8}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'left',
                      justifyContent: 'left',
                      marginLeft: 5,
                      marginTop: 1,
                      marginBottom: 5,
                    }}
                  >
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clip-path='url(#clip0_6_17)'>
                        <path
                          d='M16.7561 3.23337C15.1106 1.58884 12.4342 1.58884 10.7887 3.23337L7.30981 6.71231L11.2596 10.6621C12.0726 9.98515 13.1032 9.56127 14.2412 9.56127C14.894 9.56127 15.5151 9.69687 16.0803 9.93899L16.7561 9.20074C18.401 7.55574 18.401 4.87884 16.7561 3.23337Z'
                          fill='#9B9B9B'
                        />
                        <path
                          d='M10.6022 11.3305L6.64684 7.37524L3.24191 10.7835C1.59694 12.4285 1.59694 15.1054 3.24191 16.7509C4.88731 18.3953 7.59503 18.4267 9.2405 16.7821L9.93075 16.0885C9.68862 15.5233 9.55303 14.9022 9.55303 14.2494C9.55306 13.1406 9.95618 12.1341 10.6022 11.3305Z'
                          fill='#9B9B9B'
                        />
                        <path
                          d='M10.4907 14.2494C10.4907 16.1602 11.9249 17.7196 13.7724 17.9527V10.5461C11.9249 10.7792 10.4907 12.3386 10.4907 14.2494Z'
                          fill='#9B9B9B'
                        />
                        <path
                          d='M14.7101 10.5461V17.9527C16.5576 17.7196 17.9918 16.1602 17.9918 14.2494C17.9918 12.3386 16.5577 10.7792 14.7101 10.5461Z'
                          fill='#9B9B9B'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_6_17'>
                          <rect
                            width='16'
                            height='16'
                            fill='white'
                            transform='translate(2 2)'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={4}
                >
                  <Box>
                    <Stack
                      sx={{
                        fontFamily: 'Comic Sans MS',
                        fontSize: '15px',
                        fontWeight: 'bold',
                        marginBottom: 5,
                        alignItems: 'left',
                        justifyContent: 'left',
                        display: 'flex',
                        marginLeft: -7,
                        marginTop: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: 'Comic Sans MS',
                          fontSize: '15px',
                          fontWeight: 'bold',
                        }}
                      >
                        Naloxine
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: 'Comic Sans MS',
                          fontSize: '15px',
                          fontWeight: 'bold',
                          color: '#9B9B9B',
                        }}
                      >
                        Completed
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>

          <Card sx={{ maxWidth: '100%', borderRadius: '20px', marginTop: 2 }}>
            <CardMedia
              sx={{ height: 140 }}
              image='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hhs.gov%2Fopioids%2Fstatistics%2Findex.html&psig=AOvVaw15xnxbREXkZUnb21IusaHV&ust=1676844237776000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJDK3NqJoP0CFQAAAAAdAAAAABAE'
              title='green iguana'
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
              >
                Lizard
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>Share</Button>
              <Button size='small'>Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: '100%', borderRadius: '20px', marginTop: 2 }}>
            <CardMedia
              sx={{ height: 140 }}
              image='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hhs.gov%2Fopioids%2Fstatistics%2Findex.html&psig=AOvVaw15xnxbREXkZUnb21IusaHV&ust=1676844237776000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJDK3NqJoP0CFQAAAAAdAAAAABAE'
              title='green iguana'
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
              >
                Lizard
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>Share</Button>
              <Button size='small'>Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: '100%', borderRadius: '20px', marginTop: 2 }}>
            <CardMedia
              sx={{ height: 140 }}
              image='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hhs.gov%2Fopioids%2Fstatistics%2Findex.html&psig=AOvVaw15xnxbREXkZUnb21IusaHV&ust=1676844237776000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJDK3NqJoP0CFQAAAAAdAAAAABAE'
              title='green iguana'
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
              >
                Lizard
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>Share</Button>
              <Button size='small'>Learn More</Button>
            </CardActions>
          </Card>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

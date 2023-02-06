import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme({
  palette: {
    primary: {
      main: '#4c8bf5',
    },
  },
});

export function HomePage() {

  return (
    <ThemeProvider theme={theme}>
      <Container
        component='main'
        maxWidth='sm'
        sx={{
          backgroundColor: '#4c8bf5',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
      </Container>
    </ThemeProvider>
  );
}

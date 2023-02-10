import { Box, IconButton } from "@mui/material";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SelfImprovementRoundedIcon from '@mui/icons-material/SelfImprovementRounded';
import SpaRoundedIcon from '@mui/icons-material/SpaRounded';
import HomeWorkTwoToneIcon from '@mui/icons-material/HomeWorkTwoTone';


export const HomePageQuestion = () => {
  return (
    <>
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
            fontSize: '15px',
          }}
        >
          How are you feeling today?
        </div>
      </Box>
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
        <IconButton
          color='primary'
          aria-label='upload picture'
          component='label'
        >
          <SelfImprovementRoundedIcon
            sx={{
              color: '#371B34',
              fontSize: 40,
            }}
          />
        </IconButton>
        <IconButton
          color='primary'
          aria-label='upload picture'
          component='label'
        >
          <EmojiEmotionsIcon
            sx={{
              color: '#EF5DA8',
              fontSize: 40,
            }}
          />
        </IconButton>
        <IconButton
          color='primary'
          aria-label='upload picture'
          component='label'
        >
          <SpaRoundedIcon
            sx={{
              color: '#F09E54',
              fontSize: 40,
            }}
          />
        </IconButton>
        <IconButton
          color='primary'
          aria-label='upload picture'
          component='label'
        >
          <HomeWorkTwoToneIcon
            sx={{
              color: '#A0E3E2',
              borderBlockColor: 'black',
              fontSize: 40,
            }}
          />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: -1,
          marginBottom: 0,
          backgroundColor: '#FFFF',
          marginLeft: 1.5,
          marginRight: 1.5,
        }}
      >
        <div
          style={{
            fontFamily: 'Alegreya',
            fontSize: '15px',
          }}
        >
          Calm
        </div>
        <div
          style={{
            fontFamily: 'Alegreya',
            fontSize: '15px',
          }}
        >
          Happy
        </div>
        <div
          style={{
            fontFamily: 'Alegreya',
            fontSize: '15px',
          }}
        >
          Relax
        </div>
        <div
          style={{
            fontFamily: 'Alegreya',
            fontSize: '15px',
          }}
        >
          Focus
        </div>
      </Box>
    </>
  );
};
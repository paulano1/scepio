

import React, { useEffect, useMemo, useState } from "react";
import GoogleMapReact from "google-map-react";
import {  Container, Stack } from "@mui/system";
import { CardHeader, CircularProgress, Grid, IconButton, Paper, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';

interface AnyReactComponentProps {
  lat: number;
  lng: number;
  text: string;
}

const AnyReactComponent: React.FC<AnyReactComponentProps> = ({ text }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <button
    style={{
      backgroundColor: 'transparent',
      border: 'none',
    }}
      onClick={() => {
        setOpen(true);
      }}
    >
      <svg
        width='16'
        height='20'
        viewBox='0 0 16 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clip-path='url(#clip0_1_3)'>
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M7.56215 19.3143C7.95734 19.3143 15.0186 11.7697 15.0186 7.65163C15.0186 3.53355 11.6802 0.19519 7.56215 0.19519C3.44407 0.19519 0.105713 3.53355 0.105713 7.65163C0.105713 11.7697 7.16697 19.3143 7.56215 19.3143ZM7.56216 11.3811C9.65003 11.3811 11.3426 9.68851 11.3426 7.60064C11.3426 5.51277 9.65003 3.82022 7.56216 3.82022C5.4743 3.82022 3.78175 5.51277 3.78175 7.60064C3.78175 9.68851 5.4743 11.3811 7.56216 11.3811Z'
            fill='#1DAEEF'
          />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M0.105713 7.65163C0.105713 11.7697 7.16697 19.3143 7.56215 19.3143V11.3811C5.47429 11.381 3.78175 9.6885 3.78175 7.60064C3.78175 5.51278 5.47429 3.82023 7.56215 3.82022V0.19519C3.44407 0.19519 0.105713 3.53355 0.105713 7.65163Z'
            fill='#3EC3FF'
          />
        </g>
        <defs>
          <clipPath id='clip0_1_3'>
            <rect
              width='16'
              height='20'
              fill='white'
            />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};


async function fetchGeoJSON() {
  const response = await fetch(
    'https://services3.arcgis.com/1pxU2hJU9ZszJDcX/arcgis/rest/services/PrescriptionDrugLocations/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson'
  );
  const data = await response.json();
  let features: any[] = []
  data.features.forEach((feature : any) => {
    features.push(feature)
  }
  )
  return features
}


interface SimpleMapProps {
  center?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
}

const SimpleMap: React.FC<SimpleMapProps> = ({
  center = { lat: 45.95, lng: -100.33 },
  zoom = 6
}) => {
  const [geoJSON, setGeoJSON] = React.useState<any[]>([]);
  useEffect(() => {
    fetchGeoJSON().then((data) => {
      setGeoJSON(data);
    });
  }, []);
  const memoisedMap = useMemo(
    () => (
      <GoogleMapReact
        defaultCenter={center}
        defaultZoom={zoom}
        bootstrapURLKeys={{
          key: 'AIzaSyCP5BUL8UfEmtBa6Z36i_gKJrPSxkJpJdM',
        }}
      >
        {geoJSON.map((feature) => {
          return (
            <AnyReactComponent
              lat={feature.geometry.coordinates[1]}
              lng={feature.geometry.coordinates[0]}
              text={feature.properties.name}
            />
          );
        })}
      </GoogleMapReact>
    ),
    [geoJSON]
  );
   return (
     <>
       <Container
         sx={{
           height: '100%',
           width: '100%',
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
         }}
       >
         <Stack>
           <Box
             sx={{
               height: '60em',
               width: '100%',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
             }}
           >
             {memoisedMap}
           </Box>
           <ImgMediaCard></ImgMediaCard>
           <Box
             sx={{
               width: 400,
               height: 150,
               backgroundColor: 'primary.dark',
               '&:hover': {
                 backgroundColor: 'primary.main',
                 opacity: [0.9, 0.8, 0.7],
               },
             }}
           />
         </Stack>
       </Container>
     </>
   );
};

export default SimpleMap;

export function ImgMediaCard() {
  const [file, setFile] = useState<any>();
  const[ open , setOpen ] = useState ( false ) ;
  function handleChange(event: any) {
    const reader = new FileReader();
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
    reader.onload = () => {
      if (reader.result) {
        console.log(reader.result);
        setFile(reader.result);
      }
    }

    
  }
  return (
    <><AlertDialog visible={open}
    ></AlertDialog>
    </>
  );
}

const apiKEY = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjU5NjJlN2EwNTljN2Y1YzBjMGQ1NmNiYWQ1MWZlNjRjZWVjYTY3YzYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA5OTE2ODU0NzMxMzA3NjQxMTU0IiwiZW1haWwiOiJhbGV4dG9rZXJlbmtvQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiWXptVkNscWxaNkNlMVItakpJY0h2USIsImlhdCI6MTY3Njc4MDkzNiwiZXhwIjoxNjc2Nzg0NTM2LCJqdGkiOiJiMGE5YTc5YjY5MDBhNjNjNjYyYWRlZGFiMmUyYzdiMmVjOWNjNmU1In0.iIpPYZ786YIM0tsK7Ej8aAm5rxjOaDpqIOf9i2WjyrlRzDO5Nv9XM7kvTXW4koPDoQS0g4N1uZzGEt89HtebW9AgEk9HCeUJprEkZvnAweq5JOKIWDTnMOp2ThCkNtFdNIzFm46jquOAZ_bFTgiriyOgpbgePFXVcgz9QhGXBl7x0EsSMbgJpBkQ4mxhCfMWg3-mPmcy5dBd_1CT353fKvwbgWgCydKCYqFoVn255CMUiU4CTsTirsnYLQWqd4af2eCNmYDM7TXbLEoa1R5tFoIkwa4kzFI5uHjnn9Z17Vwa5RDrAbcp2_vU5XC8iZBQlAiqDbhughPPr6niIV-SRA'

interface AlertDialogProps {
  visible: boolean;
}
export function AlertDialog(
  {
    visible
  }
    : AlertDialogProps
) {
  const [open, setOpen] = React.useState(visible);
  const [file, setFile] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  
  function handleChange(event: any) {
    async function name(img:string) {
    const response = await fetch("https://us-central1-scepio.cloudfunctions.net/narcan", {
      body: JSON.stringify({"img": "exampleBase64String"}),
  headers: {
    Authorization: `bearer ${apiKEY}`,
    "Content-Type": "application/json"
  },
  method: "POST"
})
    const data = await response.json()
    console.log(data)
  }
    setLoading(true);
    const reader = new FileReader();
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
    reader.onload = () => {
      if (reader.result) {
        console.log(reader.result);
        setFile(reader.result);
      }
      
    };
    name('exampleBase64String').then(() => {
      setLoading(false);
    });
    
  }
    

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant='outlined'
        onClick={handleClickOpen}
      >
        Upload your Narcan details
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {'Enter the details of your Narcan'}
        </DialogTitle>
        <DialogContent>
          <Stack>
            <FormHelperText>
              {'Enter the address of your narcan'}
            </FormHelperText>
            <OutlinedInput placeholder='Location' />
            <FormHelperText>{'Enter your name'}</FormHelperText>
            <OutlinedInput placeholder='Name' />
            <FormHelperText>{'Enter the phone number'}</FormHelperText>
            <OutlinedInput placeholder='Phone number' />
            <FormHelperText>{'Upload the photo of your narcan'}</FormHelperText>
            {loading ? (
              <CircularProgress />
            ) : ( <Box>
              <Typography>
                {error}
              </Typography>
            </Box>)}
            <Button
              variant='contained'
              component='label'
            >
              Upload
              <input
                hidden
                accept='image/*'
                multiple
                type='file'
                onChange={handleChange}
              />
            </Button>
            
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={handleClose}
            autoFocus
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

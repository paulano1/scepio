import { Stack, Grid, Container, Paper, Box, Button, TextField } from "@mui/material";
import './health.css'
import { useEffect, useState } from "react";
import Select from 'react-dropdown-select';
import './health.css'

const AddMedicine = () => {
  const [medicationName, setMedicationName] = useState("");
  return (
    <>
      <Box class-name='MedicationCard'>
        <Stack spacing={2}>
          <Box
            sx={{
              marginTop: 3,
              fontFamily: 'Poppins',
              fontSize: '1.3rem',
              fontWeight: 'bold',
            }}
          >
            Add a Medication
          </Box>
          <Paper
            sx={{
              display: 'flex',
              marginTop: 2,
              borderRadius: '20px',
              backgroundColor: '#F8F8F6',
              width: '75vw',
              height: '10vw',
            }}
          >
            <Box
              sx={{
                marginTop: 2.5,
                marginLeft: 2,
                fontFamily: 'Poppins',
                columnCount: 2,
              }}
            >
              <Grid
                container
                spacing={2}
              >
                <Grid
                  item
                  xs={2}
                >
                  <Box
                    sx={{
                      marginTop: '1.5vw',
                      marginLeft: '1.5vw',
                    }}
                  >
                    <svg
                      width='30'
                      height='30'
                      viewBox='0 0 30 30'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clip-path='url(#clip0_89_95)'>
                        <path
                          d='M27.6678 2.31253C24.5826 -0.770966 19.5642 -0.770966 16.4791 2.31253L9.95605 8.83554L17.3619 16.2414C18.8862 14.9721 20.8187 14.1774 22.9525 14.1774C24.1764 14.1774 25.3411 14.4316 26.4008 14.8856L27.6678 13.5014C30.7521 10.417 30.7521 5.39778 27.6678 2.31253Z'
                          fill='#9B9B9B'
                        />
                        <path
                          d='M16.1293 17.4947L8.71312 10.0786L2.32886 16.4691C-0.755454 19.5534 -0.755454 24.5727 2.32886 27.6579C5.414 30.7412 10.491 30.8 13.5762 27.7164L14.8704 26.416C14.4165 25.3563 14.1622 24.1916 14.1622 22.9677C14.1623 20.8887 14.9181 19.0014 16.1293 17.4947Z'
                          fill='#9B9B9B'
                        />
                        <path
                          d='M15.9202 22.9677C15.9202 26.5504 18.6092 29.4742 22.0734 29.9113V16.024C18.6092 16.4611 15.9202 19.3849 15.9202 22.9677Z'
                          fill='#9B9B9B'
                        />
                        <path
                          d='M23.8313 16.024V29.9113C27.2955 29.4742 29.9845 26.5504 29.9845 22.9676C29.9845 19.3849 27.2955 16.4611 23.8313 16.024Z'
                          fill='#9B9B9B'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_89_95'>
                          <rect
                            width='30'
                            height='30'
                            fill='white'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={6}
                >
                  <input
                    type='text'
                    placeholder='Medication Name'
                    value={medicationName}
                    onChange={(e) => setMedicationName(e.target.value)}
                    style={{
                      border: '0.5px solid #9B9B9B',
                      background: '#F8F8F6',
                      borderRadius: '5px',
                      fontFamily: 'Poppins',
                      fontWeight: 'bold',
                      height: '5vw',
                      width: '30vw',
                      textAnchor: 'middle',
                      textAlign: 'left',
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Stack>
      </Box>
    </>
  );}

const LengthOfMedication = () => {
  const [numberOfPills, setNumberOfPills] = useState('');
  const [numberOfDays, setNumberOfDays] = useState('');
  const [selectSchedule, setSelectSchedule] = useState({
    value: '',
    label: '',
  })
  const options = [
    {
      value: 1,
      label: 'Every Sunday',
    },
    {
      value: 2,
      label: 'Every Monday',
    },
    {
      value: 3,
      label: 'Every Tuesday',
    },
    {
      value: 4,
      label: 'Every Wednesday',
    },
    {
      value: 5,
      label: 'Every Thursday',
    },
    {
      value: 6,
      label: 'Every Friday',
    },
    {
      value: 6,
      label: 'Every Sunday',
    },
  ];
  return (
    <>
      <Box class-name='LengthOfMedication'>
        <Stack spacing={1}>
          <Box
            sx={{
              marginTop: 3,
              fontFamily: 'Poppins',
              fontSize: '1.3rem',
              fontWeight: 'bold',
            }}
          >
            Length of Medication
          </Box>
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={5}
            >
              <Paper
                sx={{
                  display: 'flex',
                  borderRadius: '20px',
                  backgroundColor: '#F8F8F6',
                  height: '8vw',
                  width: '25vw',
                }}
              >
                <Grid
                  container
                  spacing={2}
                >
                  <Grid
                    item
                    xs={7}
                  >
                    <input
                      type='number'
                      placeholder='Number of Pills'
                      value={numberOfPills}
                      onChange={(e) => {
                        if (!/[0-9]/.test(e.target.value)) return;
                        setNumberOfPills(e.target.value);
                      }}
                      style={{
                        width: '15vw',
                        height: '4vw',
                        marginTop: '1.5vw',
                        marginLeft: '1.5vw',
                        borderRadius: '5px',
                        fontFamily: 'Poppins',
                        fontSize: '1.2rem',
                        background: '#F8F8F6',
                        borderWidth: '1px',
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={2}
                  >
                    <Box
                      sx={{
                        marginTop: '2vw',
                        marginLeft: '3vw',
                        fontFamily: 'Poppins',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                      }}
                    >
                      Pills
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid
              item
              xs={7}
            >
              <Paper
                sx={{
                  display: 'flex',
                  borderRadius: '20px',
                  backgroundColor: '#F8F8F6',
                  height: '8vw',
                  width: '50vw',
                }}
              >
                <Grid
                  container
                  spacing={2}
                >
                  <Grid
                    item
                    xs={6}
                  >
                    <Box
                      sx={{
                        marginTop: '2vw',
                        marginLeft: '1.5vw',
                        fontFamily: 'Poppins',
                      }}
                    >
                      <Select
                        options={options}
                        placeholder='Number of Days'
                        values={options}
                        onChange={(e) =>
                          setNumberOfDays(String(e.values) || '')
                        }
                        color='#F6BE68'
                        multi={true}
                      />
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                  >
                    <Box>
                      <input
                        type='number'
                        placeholder='Number of Days'
                        value={numberOfPills}
                        onChange={(e) => {
                          if (!/[0-9]/.test(e.target.value)) return;
                          setNumberOfPills(e.target.value);
                        }}
                        style={{
                          width: '10vw',
                          height: '4vw',
                          marginTop: '1.5vw',
                          marginLeft: '1.5vw',
                          borderRadius: '5px',
                          fontFamily: 'Poppins',
                          fontSize: '1.2rem',
                          background: '#F8F8F6',
                          borderWidth: '1px',
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                  >
                    <Box
                      sx={{
                        marginTop: '2vw',
                        marginLeft: '5vw',
                        fontFamily: 'Poppins',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                      }}
                    >
                      Days
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </>
  );
};



export const Health = () => {
  const handleButtonClick = () => {
    console.log("Button clicked");
  };
  return (
    <Container maxWidth='sm'>
      <Stack spacing={2}>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            xs={4}
          >
            <button
              className='BackButton'
              onClick={handleButtonClick}
              style={{
                border: 'none',
                background: 'none',
              }}
            >
              <svg
                width='81'
                height='75'
                viewBox='0 0 81 75'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  width='81'
                  height='75'
                  rx='14'
                  fill='#F8F8F6'
                />
                <g clip-path='url(#clip0_6_2010)'>
                  <path
                    d='M33.4598 35.9375H54V39.0625H33.4598L42.5115 47.4438L40.1254 49.6531L27 37.5L40.1254 25.3469L42.5115 27.5563L33.4598 35.9375Z'
                    fill='#9B9B9B'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_6_2010'>
                    <rect
                      width='40.5'
                      height='37.5'
                      fill='white'
                      transform='translate(20.25 18.75)'
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </Grid>
          <Grid
            item
            xs={8}
          >
            <Box
              sx={{
                marginTop: 3,
                fontFamily: 'Poppins',
                fontSize: '1.3rem',
                fontWeight: 'bold',
              }}
            >
              Add A Medicine
            </Box>
          </Grid>
          
        </Grid>
        <AddMedicine />
        <LengthOfMedication />
      </Stack>
    </Container>
  );
};


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PROJECT_ID } from '../api';
import { Container, Grid, Card, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/navbar/Navbar';
const ShortFilm = () => {
  const navigate = useNavigate()
  const [shortfilms, setShortfilms] = useState([]);

  useEffect(() => {
    // Fetch shortfilm data using the filter for shortfilm
    axios.get('https://academics.newtonschool.co/api/v1/ott/show?filter={"type": "short film"}', {
      headers: {
        projectId: PROJECT_ID,
      },
    })
      .then((response) => {
        setShortfilms(response.data.data);
      })
      .catch((error) => {
        alert(`Server is down. Please try after sometime `)
      });
  }, []);
  return (
    <>
      <Navbar />
      <Container className='cursor'>
        <Grid pt={10} pb={10} container spacing={3}>
          {shortfilms.map((shortfilm) => (
            // Display short film thumbnails here
            <Grid item xs={6} sm={4} md={2} key={shortfilm._id}>
              <Card>
                <CardMedia onClick={() => {


                  navigate("/content", { state: shortfilm })
                }} name={shortfilm._id} component="img" height="250" image={shortfilm.thumbnail} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ShortFilm;
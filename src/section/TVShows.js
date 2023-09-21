import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PROJECT_ID } from '../api';
import { Container, Grid, Card, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/navbar/Navbar';
const TVShows = () => {
  const navigate = useNavigate()
  const [tvshows, setTvshows] = useState([]);

  useEffect(() => {
    // Fetch tvshow data using the filter for tv shows
    axios.get('https://academics.newtonschool.co/api/v1/ott/show?filter={"type": "tv show"}', {
      headers: {
        projectId: PROJECT_ID,
      },
    })
      .then((response) => {
        setTvshows(response.data.data);
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
          {tvshows.map((tvshow) => (
            // Display tv shows thumbnails here
            <Grid item xs={6} sm={4} md={2} key={tvshow._id}>
              <Card>
                <CardMedia onClick={() => {


                  navigate("/content", { state: tvshow })
                }} name={tvshow._id} component="img" height="250" image={tvshow.thumbnail} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default TVShows;
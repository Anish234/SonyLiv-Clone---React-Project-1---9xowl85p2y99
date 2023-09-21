import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PROJECT_ID } from '../api';
import { Container, Grid, Card, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/navbar/Navbar';
const MoviesSection = () => {
  const navigate = useNavigate()
  const [movies, setMovies] = useState([]);

  useEffect((selected) => {
    // Fetch movies data using the filter for movies
    axios.get('https://academics.newtonschool.co/api/v1/ott/show?filter={"type": "movie"}', {
      headers: {
        projectId: PROJECT_ID,
      },
    })
      .then((response) => {
        setMovies(response.data.data);
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
          {movies.map((movie) => (
            // Display movie thumbnails here

            <Grid item xs={6} pt={20} sm={4} md={2} key={movie._id}>
              <Card>
                <CardMedia onClick={() => {


                  navigate("/content", { state: movie })
                }} name={movie._id} component="img" height="250" image={movie.thumbnail} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default MoviesSection;
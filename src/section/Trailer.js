import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PROJECT_ID } from '../api';
import { Container, Grid, Card, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/navbar/Navbar';
const Trailer = () => {
  const navigate = useNavigate()
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    // Fetch Trailer data using the filter for Trailer
    axios.get('https://academics.newtonschool.co/api/v1/ott/show?filter={"type": "trailer"}', {
      headers: {
        projectId: PROJECT_ID,
      },
    })
      .then((response) => {
        setTrailers(response.data.data);
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
          {trailers.map((trailer) => (
            // Display Trailer thumbnails here
            <Grid item xs={6} sm={4} md={2} key={trailer._id}>
              <Card>
                <CardMedia onClick={() => {


                  navigate("/content", { state: trailer })
                }} name={trailer._id} component="img" height="250" image={trailer.thumbnail} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Trailer;
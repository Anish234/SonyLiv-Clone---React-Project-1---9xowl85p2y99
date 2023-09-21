import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PROJECT_ID } from '../api';
import { Container, Grid, Card, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/navbar/Navbar';
const Webseries = () => {
  const navigate = useNavigate()
  const [webseriess, setWebseriess] = useState([]);

  useEffect(() => {
    // Fetch webseries data using the filter for webseries
    axios.get('https://academics.newtonschool.co/api/v1/ott/show?filter={"type": "web series"}', {
      headers: {
        projectId: PROJECT_ID,
      },
    })
      .then((response) => {
        setWebseriess(response.data.data);
      })
      .catch((error) => {
        alert(`Server is down. Please try after sometime `)
      });
  }, []);
  return (
    <>
      <Navbar />
      <Container className='cursor-pointer'>
        <Grid pt={10} pb={10} container spacing={3}>
          {webseriess.map((webseries) => (
            // Display webseries thumbnails here
            <Grid item xs={6} sm={4} md={2} key={webseries._id}>
              <Card>
                <CardMedia onClick={() => {


                  navigate("/content", { state: webseries })
                }} name={webseries._id} component="img" height="250" image={webseries.thumbnail} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Webseries;
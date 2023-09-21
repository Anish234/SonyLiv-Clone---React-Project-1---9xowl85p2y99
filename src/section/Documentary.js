import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PROJECT_ID } from '../api';
import { Container, Grid, Card, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/navbar/Navbar';
const Documentary = () => {
  const navigate = useNavigate()
  const [documentarys, setDocumentarys] = useState([]);

  useEffect(() => {
    // Fetch documentary data using the filter for documentary
    axios.get('https://academics.newtonschool.co/api/v1/ott/show?filter={"type": "documentary"}', {
      headers: {
        projectId: PROJECT_ID,
      },
    })
      .then((response) => {
        setDocumentarys(response.data.data);
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
          {documentarys.map((documentary) => (
            // Display documentary thumbnails here
            <Grid item xs={6} sm={4} md={2} key={documentary._id}>
              <Card>
                <CardMedia onClick={() => {


                  navigate("/content", { state: documentary })
                }} name={documentary._id} component="img" height="250" image={documentary.thumbnail} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Documentary;
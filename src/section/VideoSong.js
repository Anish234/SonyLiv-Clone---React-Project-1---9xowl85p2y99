import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PROJECT_ID } from '../api';
import { Container, Grid, Card, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/navbar/Navbar';
const VideoSong = () => {
  const navigate = useNavigate()
  const [videosongs, setVideosongs] = useState([]);

  useEffect(() => {
    // Fetch videosong data using the filter for video song
    axios.get('https://academics.newtonschool.co/api/v1/ott/show?filter={"type": "video song"}', {
      headers: {
        projectId: PROJECT_ID,
      },
    })
      .then((response) => {
        setVideosongs(response.data.data);
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
          {videosongs.map((videosong) => (
            // Display video song thumbnails here
            <Grid item xs={6} sm={4} md={2} key={videosong._id}>
              <Card>
                <CardMedia onClick={() => {


                  navigate("/content", { state: videosong })
                }} name={videosong._id} component="img" height="250" image={videosong.thumbnail} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default VideoSong;
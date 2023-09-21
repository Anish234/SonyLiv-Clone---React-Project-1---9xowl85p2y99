import React from 'react';
import { Container, Paper, Typography, Grid, Button, Card, CardContent } from '@mui/material';
import Navbar from '../../components/common/navbar/Navbar';

const Subscribe = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="md" >
        <Typography style={{ color: 'white', marginTop: 70 }} variant="h5" align="center" gutterBottom>
          Subscribe to watch all content on Sony LIV
        </Typography>
        <Paper elevation={4} style={{ backgroundColor: 'black', border: 'solid white', padding: '20px', marginBottom: "80px", marginTop: '20px' }}>

          <Grid container spacing={3} justifyContent="center">
            {/* Subscription Plan 1 */}
            <Grid item xs={12} sm={6} md={4} >
              <Card>
                <CardContent style={{ backgroundColor: 'black', color: 'white', height: "280" }}>
                  <Typography variant="h5">Basic Mobile Plan</Typography>
                  <br />
                  <Typography variant="body1"><span className="val" style={{ color: 'orange' }}>₹599</span><span>Yearly</span></Typography>
                  <br />
                  <Typography variant="h6"><span className="val" style={{ color: 'orange' }}>Access All Content</span></Typography>
                  <br />
                  <Typography variant="body2">
                    <span>Number of logged in devices - 1</span>
                    <br />
                    <br />
                    <span>Watch on devices at same time - 1</span>
                    <br />
                    <br />
                    <span>Max Video Quality -
                      <br />
                      HD(720p)</span>
                    <br />
                    <br />
                    <span>Max Audio Quality - Stereo 2.1</span>
                    <br />
                    <br />
                    <span> Ads - On Live Sports, Channels &amp; Reality TV Shows</span>
                  </Typography>
                  <br />
                  <br />
                  <Button style={{ backgroundColor: 'blue', color: 'white' }} padding="0px 0px 5px 0px" variant="contained" color="primary" fullWidth>
                    Subscribe
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Subscription Plan 2 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent style={{ backgroundColor: 'black', color: 'white', height: "280" }}>
                  <Typography variant="h5">LIV Premium</Typography>
                  <br />
                  <Typography variant="body1"><span className="val" style={{ color: 'orange' }}>₹999</span><span>Yearly</span></Typography>
                  <br />
                  <Typography variant="h6"><span className="val" style={{ color: 'orange' }}>Access All Content</span></Typography>
                  <br />
                  <Typography variant="body2">
                    <span>Number of logged in devices - 5</span>
                    <br />
                    <br />
                    <span>Watch on devices at same time - 2</span>
                    <br />
                    <br />
                    <span>Max Video Quality - FULL HD(1080p)</span>
                    <br />
                    <br />
                    <span>Max Audio Quality - Stereo 2.1</span>
                    <br />
                    <br />
                    <span> Ads - On Live Sports, Channels &amp; Reality TV Shows</span>
                  </Typography>
                  <br />
                  <br />
                  <Button style={{ backgroundColor: 'blue', color: 'white' }} padding="0px 0px 5px 0px" variant="contained" color="primary" fullWidth>
                    Subscribe
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Subscription Plan 3 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent style={{ backgroundColor: 'black', color: 'white', height: "280" }}>
                  <Typography variant="h5">LIV Premium</Typography>
                  <br />
                  <Typography variant="body1"><span className="val" style={{ color: 'orange' }}>₹299</span><span>Monthly</span></Typography>
                  <br />
                  <Typography variant="h6"><span className="val" style={{ color: 'orange' }}>Access All Content</span></Typography>
                  <br />
                  <Typography variant="body2">
                    <span>Number of logged in devices - 5</span>
                    <br />
                    <br />
                    <span>Watch on devices at same time - 1</span>
                    <br />
                    <br />
                    <span>Max Video Quality - FULL HD(1080p)</span>
                    <br />
                    <br />
                    <span>Max Audio Quality - Stereo 2.1</span>
                    <br />
                    <br />
                    <span> Ads - On Live Sports, Channels &amp; Reality TV Shows</span>
                  </Typography>
                  <br />
                  <br />
                  <Button style={{ backgroundColor: 'blue', color: 'white' }} padding="0px 0px 5px 0px" variant="contained" color="primary" fullWidth>
                    Subscribe
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default Subscribe;
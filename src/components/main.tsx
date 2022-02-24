/* eslint-disable no-unused-vars */
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import { ReactMediaRecorder } from 'react-media-recorder';

const VideoCard = () => {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="body2">VIDEO ENTREVISTA</Typography>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <div>
                <ReactMediaRecorder
                  video
                  render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
                    <div>
                      <Grid container spacing={4}>
                        <Grid item xs={12}>
                          <video src={mediaBlobUrl} controls loop></video>
                        </Grid>
                        <Grid item xs={6}>
                          <Button variant="contained" onClick={startRecording}>
                            Start Recording
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button variant="outlined" onClick={stopRecording}>
                            Stop Recording
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                  )}
                />
              </div>
            </CardContent>
            <CardActions>
              <Typography variant="body2">
                Cual fue tu videojuego favorito durante tu infancia ?
              </Typography>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <div>
                <ReactMediaRecorder
                  video
                  render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
                    <div>
                      <Grid container spacing={4}>
                        <Grid item xs={12}>
                          <video src={mediaBlobUrl} controls loop />
                        </Grid>
                        <Grid item xs={6}>
                          <Button variant="contained" onClick={startRecording}>
                            Start Recording
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button variant="outlined" onClick={stopRecording}>
                            Stop Recording
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                  )}
                />
              </div>
            </CardContent>
            <CardActions>
              <Typography variant="body2">
                Cual fue tu experiencia en tu anterior empresa ?
              </Typography>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <div>
                <ReactMediaRecorder
                  video
                  render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
                    <div>
                      <Grid container spacing={4}>
                        <Grid item xs={12}>
                          <video src={mediaBlobUrl} controls loop />
                        </Grid>
                        <Grid item xs={6}>
                          <Button variant="contained" onClick={startRecording}>
                            Start Recording
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button variant="outlined" onClick={stopRecording}>
                            Stop Recording
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                  )}
                />
              </div>
            </CardContent>
            <CardActions>
              <Typography variant="body2">
                Que lenguaje de programación dominas ?
              </Typography>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <div>
                <ReactMediaRecorder
                  video
                  render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
                    <div>
                      <Grid container spacing={4}>
                        <Grid item xs={12}>
                          <video src={mediaBlobUrl} controls loop />
                        </Grid>
                        <Grid item xs={6}>
                          <Button variant="contained" onClick={startRecording}>
                            Start Recording
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button variant="outlined" onClick={stopRecording}>
                            Stop Recording
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                  )}
                />
              </div>
            </CardContent>
            <CardActions>
              <Typography variant="body2">Cual es tu nivel de base de datos ?</Typography>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default VideoCard;

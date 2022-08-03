import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProgressBar from './progressBar'
import Box from "@mui/material/Box";

export default function DonationCard() {
  return (
    <Card >
      <CardMedia
        component="img"
        height="200"
        image="https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <ProgressBar value={100} />
        <Box flexDirection={"row"} display={"flex"} justifyContent={"space-between"}>
          <Box>
            <Typography variant="body1">
              Lizard
            </Typography>
            <Typography variant="body1">
              01
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              Lizard
            </Typography>
            <Typography variant="body1">
              01
            </Typography>
          </Box>
        </Box>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

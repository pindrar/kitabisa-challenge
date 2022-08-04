import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProgressBar from './progressBar'
import Box from "@mui/material/Box";
import { Donation } from "../models/donations";

export default function DonationCard(donation: Donation) {
  return (
    <Card sx={{
      minHeight: {
        xs: 300,
        md: 360
      }
    }}>
      <CardMedia
        component="img"
        sx={{
          height: {
            xs: 160,
            md: 200
          }
        }}
        image={donation.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" fontSize={16} fontWeight={600}>
          {donation.title}
        </Typography>
        <ProgressBar value={donation.percentage} />
        <Box flexDirection={"row"} display={"flex"} justifyContent={"space-between"}>
          <Box>
            <Typography variant="subtitle2" fontWeight={600}>
              Terkumpul
            </Typography>
            <Typography variant="subtitle2" >
              {donation.received}
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2" fontWeight={600}>
              Sisa Hari
            </Typography>
            <Typography variant="subtitle2">
              {donation.remaining}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ProgressBar from "./progressBar";
import Box from "@mui/material/Box";
import { Donation } from "../models/donations";
import { cardMediaSx, cardSx } from "../../styles/style";

export default function DonationCard(donation: Donation) {
  return (
    <Card sx={cardSx}>
      <CardMedia
        component="img"
        sx={cardMediaSx}
        image={donation.image}
        alt={donation.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" fontSize={16} fontWeight={600}>
          {donation.title}
        </Typography>
        <ProgressBar value={donation.percentage} />
        <Box
          flexDirection={"row"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography variant="caption" fontWeight={600}>
              Terkumpul
            </Typography>
            <Typography variant="subtitle2">{donation.received}</Typography>
            <Typography variant="caption" fontWeight={600}>
              Dari
            </Typography>
            <Typography variant="subtitle2">{donation.target}</Typography>
          </Box>
          <Box>
            <Typography variant="caption" fontWeight={600}>
              Sisa Hari
            </Typography>
            <Typography variant="subtitle2" textAlign="end">{donation.remaining} Hari</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

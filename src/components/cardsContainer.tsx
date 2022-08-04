import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import DonationCards from "./donationCard";
import { Donation } from "../models/donations";

interface cardsContainerProps {
  data: Array<Donation>;
}

export default function CardsContainer(props: cardsContainerProps) {
  return (
    <Container
      sx={{
        paddingTop: 10,
      }}
    >
      <Box>
        <Grid container spacing={2}>
          {props.data.map((donation, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <DonationCards {...donation}/>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

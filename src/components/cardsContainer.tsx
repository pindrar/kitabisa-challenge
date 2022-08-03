import * as React from 'react';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import DonationCards from './donationCard'

export default function CardsContainer() {
    return (
        <Container sx={{
            paddingTop: 10
        }}>
            <Box>
                <Grid container spacing={2}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <DonationCards />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    )
}

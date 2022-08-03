import * as React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import DonationCards from '../src/components/donationCards'

import styles from '@/pages/index.module.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Donations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Container sx={{display: "flex"}}>
        <Box sx={{flex: 1}}>Test</Box>
        <Box>
          <Button variant="outlined">Outlined</Button>
        </Box>
      </Container>

      <Container>
        <Box>
          <Grid container spacing={2}>
            {Array.from(Array(6)).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <DonationCards/>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Container>
  )
}

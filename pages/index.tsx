import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Container from '@mui/material/Container';
import Header from '../src/components/header'
import CardsContainer from '../src/components/cardsContainer'
import { getDonationsResponse } from '../src/api/api'
import { setDonations,getDonations } from '../src/models/donations'

export default function Home() {
  //const [donations, setDonations] = useState([]);

  useEffect(() => {
    getDonationsResponse()
    .then((response:any)=>{
      setDonations(response.data)
      console.log(getDonations())
    })
    .catch((err)=>{
      console.log(err)
    })
  });

  return (
    <Container>
      <Head>
        <title>Donations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <CardsContainer/>
    </Container>
  )
}

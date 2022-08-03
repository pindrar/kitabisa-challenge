import * as React from 'react';
import Head from 'next/head'
import Container from '@mui/material/Container';
import Header from '../src/components/header'
import CardsContainer from '../src/components/cardsContainer'

export default function Home() {
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

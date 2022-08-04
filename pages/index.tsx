import React, { useState } from "react";
import Head from "next/head";
import Container from "@mui/material/Container";
import Header from "../src/components/header";
import CardsContainer from "../src/components/cardsContainer";
import { getDonationsResponse, getDomain } from "../src/api/api";
import { setDonations, getDonations } from "../src/models/donations";

import type { GetServerSideProps } from "next";

type Props = { data: any };

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const fullDomain = getDomain(context);
  const data = await getDonationsResponse(fullDomain);

  return {
    props: {
      data,
    },
  };
};

export default function Home(props: Props) {
  const [sortType, setSortType] = useState("");
  if (props) {
    setDonations(props.data);
  }

  return (
    <Container
      sx={{
        marginBottom: 10,
      }}
    >
      <Head>
        <title>Kitabisa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header sortType={(sort) => setSortType(sort)} />
      <CardsContainer data={getDonations(sortType)} />
    </Container>
  );
}

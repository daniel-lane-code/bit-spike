import React from 'react'
import Head from 'next/head'
import { Title } from '../components/atoms/title'
import { Button } from '../components/atoms/button'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Title>
      This is a title
    </Title>

    <Button>
      Click me
    </Button>
  </div>
)

export default Home

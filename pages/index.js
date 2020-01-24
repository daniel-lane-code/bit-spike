import React from 'react'
import Head from 'next/head'
import { Button } from '../components/atoms/button'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Button>
      Click me
    </Button>
  </div>
)

export default Home

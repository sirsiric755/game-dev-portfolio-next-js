import Head from 'next/head'
import Image from 'next/image'
import Home from '../components/Home'
import About from '../components/About'
import Showcase from '../components/Showcase'
import Contact from '../components/Contact'

export default function index() {
  return (
    <>
      <Head>
        <title>Anto - Oculus Quest 2 Developer</title>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Home></Home>
      <About></About>
      <Showcase></Showcase>
      <Contact></Contact>
    </>
  )
}

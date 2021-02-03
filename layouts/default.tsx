import Head from 'next/head'
import Header from '../components/header/header'
import Navigation from '../components/nav/nav'

const Default: React.FC = (props) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Header
        header="Christoph Stach"
        subHeader="Frontend Engineer - Web Developer - Software Engineer - Full Stack Developer"
      />
      <main className="px-5 py-10 mx-auto max-w-7xl">{props.children}</main>
    </>
  )
}

export default Default

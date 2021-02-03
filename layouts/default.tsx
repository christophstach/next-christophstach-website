import Head from 'next/head'
import Header from '../components/header/header'
import Navigation from '../components/nav/nav'

const Default: React.FC = (props) => {
  return (
    <div className="default-layout">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Header
        header="Christoph Stach"
        subHeader="Frontend Engineer - Web Developer - Software Engineer - Full Stack Developer"
      />
      <main>{props.children}</main>
    </div>
  )
}

export default Default

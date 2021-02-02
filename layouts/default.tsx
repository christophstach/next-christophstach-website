import Head from 'next/head'
import Navigation from '../components/nav/nav'

const Default: React.FC = (props) => {
  return (
    <div className="default-layout">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="gradient h-60 flex flex-col pt-10">
        <h1>Christoph Stach</h1>
        <h2>Frontend Engineer - Web Developer - Software Engineer - Full Stack Developer</h2>
      </div>
      <main>{props.children}</main>
    </div>
  )
}

export default Default

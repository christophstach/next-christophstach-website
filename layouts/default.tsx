import Head from 'next/head'
import Navigation from '../components/navigation'

const Default: React.FC = (props) => {
  return (
    <div className="default-layout">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      {props.children}
    </div>
  )
}

export default Default

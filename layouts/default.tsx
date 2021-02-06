import { AnimatePresence, motion, Variants } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import React from 'react'

import Header from '../components/header/header'
import Navigation from '../components/nav/nav'
import GitHub from '../components/social-links/github/github'
import LinkedIn from '../components/social-links/linkedin/linkedin'
import Xing from '../components/social-links/xing/xing'

const variants: Variants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
}

const Default: React.FC = (props) => {
  const { route } = useRouter()

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <Header
        header="Christoph Stach"
        subHeader="Frontend Engineer - Web Developer - Software Engineer - Full Stack Developer"
      />

      <AnimatePresence exitBeforeEnter>
        <motion.main
          key={route}
          initial="initial"
          animate="in"
          exit="out"
          variants={variants}
          className="px-5 mx-auto max-w-7xl"
        >
          {props.children}
        </motion.main>
      </AnimatePresence>

      <footer className="p-3 bg-gray-300">
        <div className="flex justify-center mx-auto max-w-7xl">
          <LinkedIn url="https://www.linkedin.com/in/christoph-stach-7586b958" />
          <Xing url="https://www.xing.com/profile/Christoph_Stach" />
          <GitHub url="https://github.com/christophstach" />
        </div>
      </footer>
    </div>
  )
}

export default Default

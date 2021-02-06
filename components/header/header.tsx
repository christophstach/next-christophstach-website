import { motion, Variants } from 'framer-motion'

interface Props {
  header: string
  subHeader: string
}

const variants1: Variants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
}

const variants2: Variants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      delay: 1.5,
      duration: 1,
    },
  },
}

const Header: React.FC<Props> = (props) => {
  return (
    <header className="flex flex-col items-center py-16 bg-gray-50 ">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants1}
        className="pb-10 font-bold text-center text-transparent text-7xl md:text-8xl bg-gradient-to-r from-primary-300 to-primary-800 bg-clip-text"
      >
        {props.header}
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants2}
        className="pb-4 text-3xl font-bold text-center text-transparent text-black md:text-4xl"
      >
        {props.subHeader}
      </motion.div>
    </header>
  )
}

export default Header

import Image from 'next/image'
import GitHub from '../social-links/github/github'
import LinkedIn from '../social-links/linkedin/linkedin'
import Xing from '../social-links/xing/xing'

interface Props {
  header: string
  subHeader: string
}

const Header: React.FC<Props> = (props) => {
  return (
    <header className="flex flex-col items-center p-16 bg-gradient-to-b from-primary-400 to-primary-700">
      <div className="flex mb-2">
        <GitHub url="https://github.com/christophstach" />
        <Xing url="https://www.xing.com/profile/Christoph_Stach" />
        <LinkedIn url="https://www.linkedin.com/in/christoph-stach-7586b958" />
      </div>
      <div className="relative w-32 h-32 overflow-hidden border-4 border-white border-solid rounded-full">
        <Image src="/images/me.jpg" alt="Profile Avatar" layout="fill" objectFit="cover" />
      </div>
      <h1 className="mb-3 text-4xl font-bold text-center text-white">{props.header}</h1>
      <h2 className="text-2xl font-bold text-center text-white">{props.subHeader}</h2>
    </header>
  )
}

export default Header

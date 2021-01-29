import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

interface Props {
  text: string
  href: string
  as?: string
  mode?: 'base' | 'sm'
}

const NavItem: React.FC<Props> = (props) => {
  const { asPath } = useRouter()

  const mode = props.mode ? props.mode : 'base'

  let activeClass, normalClass

  if (mode === 'base') {
    activeClass = `bg-gray-900 text-white px-3 py-2 rounded-md text-base font-medium`
    normalClass = `text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`
  } else if (mode === 'sm') {
    activeClass = 'bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
    normalClass =
      'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
  }

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className = asPath === props.href || asPath === props.as ? activeClass : normalClass

  return (
    <Link href={props.href}>
      <a className={className}>{props.text}</a>
    </Link>
  )
}

export default NavItem

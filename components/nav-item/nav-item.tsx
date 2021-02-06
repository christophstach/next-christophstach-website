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

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const active = asPath === props.href || asPath === props.as

  return (
    <Link href={props.href} shallow>
      <a
        className={`
          transition-all duration-1000 ease-in-out
          ${
            active
              ? {
                  base: `bg-gray-900 text-white px-3 py-2 rounded-md text-base font-medium`,
                  sm: `bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium`,
                }[mode]
              : {
                  base: `text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`,
                  sm: `text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`,
                }[mode]
          }
        `}
      >
        {props.text}
      </a>
    </Link>
  )
}

export default NavItem

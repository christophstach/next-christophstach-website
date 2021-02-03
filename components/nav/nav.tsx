import { useState } from 'react'
import NavItem from '../nav-item/nav-item'

interface Item {
  name: string
  href: string
}

const Nav: React.FC = () => {
  const [open, setOpen] = useState(false)

  const navigationItems: Item[] = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Professional Experience',
      href: '/professional-experience',
    },
    {
      name: 'Education',
      href: '/education',
    },
  ]

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-8">
                <svg
                  className="text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  {navigationItems.map((item, idx) => (
                    <NavItem key={idx} href={item.href} text={item.name} />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex -mr-2 md:hidden">
              {/* Mobile menu button */}
              <button
                className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open main menu</span>
                {/*
                  Heroicon name: menu

                  Menu open: "hidden", Menu closed: "block"
                */}
                <svg
                  className={`${open ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/*
                  Heroicon name: x

                  Menu open: "block", Menu closed: "hidden"
                */}
                <svg
                  className={`${open ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/*
          Mobile menu, toggle classes based on menu state.

          Open: "block", closed: "hidden"
        */}
        <div className={`${open ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            {navigationItems.map((item, idx) => (
              <NavItem key={idx} href={item.href} text={item.name} mode="sm" />
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav

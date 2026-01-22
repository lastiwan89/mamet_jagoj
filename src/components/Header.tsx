import { Link } from '@tanstack/react-router'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="px-4 py-2 flex justify-between items-center bg-gray-800 text-white shadow-lg">
        <div className="flex ml-4 items-center">
          <Link className="flex gap-1 items-center" to="/">
            <img src="./logo.png" alt="Logo" className="w-23" />
            <span className="font-black bg-linear-to-r from-cyan-500 via-cyan-600 to-orange-600 bg-clip-text text-transparent">
              JagoJalan
            </span>
          </Link>
        </div>
        <div>
          <nav className="hidden lg:flex gap-6 items-center">
            <Link className="font-medium" to="/">
              Home
            </Link>
            <Link className="font-medium" to="/location">
              Location
            </Link>
            <Link className="font-medium" to="/work">
              Work
            </Link>
            <Link className="font-medium" to="/about">
              About
            </Link>
            <Link className="font-medium" to="/contact">
              Contact
            </Link>
            <Link
              className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full transition-colors shadow-lg shadow-cyan-500/50"
              to="/contact"
            >
              <span>Get in touch</span>
            </Link>
          </nav>
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 hover:bg-gray-700 rounded-lg lg:hidden transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <aside
        className={`fixed top-0 left-0 h-full md:w-80 w-screen px-4 bg-gray-900 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between  p-2 border-b border-gray-700">
          <Link
            className="flex gap-1 items-center"
            onClick={() => setIsOpen(false)}
            to="/"
          >
            <img src="/logo.png" alt="Logo" className="w-24" />
            <span className="font-black bg-linear-to-r from-cyan-500 via-cyan-600 to-orange-600 bg-clip-text text-transparent">
              JagoJalan
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
            }}
          >
            <span className="font-medium">Home</span>
          </Link>

          {/* Demo Links Start */}

          <Link
            to="/location"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
            }}
          >
            <span className="font-medium">Location</span>
          </Link>

          <Link
            to="/work"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
            }}
          >
            <span className="font-medium">Work</span>
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
            }}
          >
            <span className="font-medium">About</span>
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
            }}
          >
            <span className="font-medium">Contact</span>
          </Link>
        </nav>
      </aside>
    </>
  )
}

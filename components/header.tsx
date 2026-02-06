'use client'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { navLink } from '@/constant/navlink'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpen() {
    setIsOpen((prev) => !prev)
  }

  function goHome() {
    if (isOpen === false) {
      setIsOpen(true)
    }
  }

  return (
    <>
      <header className="flex justify-between items-center px-8 py-3 bg-sky-600">
        <div>
          <Link onClick={goHome} href="/">
            <Image width={80} height={80} src="/logo.png" alt="Logo" />
          </Link>
        </div>
        <div>
          <nav className="hidden lg:flex gap-6">
            {navLink.map((items) => (
              <Link
                className="font-semibold text-md"
                key={items.title}
                href={items.src}
              >
                {items.title}
              </Link>
            ))}
          </nav>
          <button className="lg:hidden" onClick={handleOpen}>
            {isOpen ? <Menu size={24} /> : <X size={24} />}
          </button>
        </div>
      </header>
      <aside
        className={`fixed top-17 left-0 h-full md:w-80 w-screen px-4 bg-gray-900 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          !isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center gap-6 py-6">
          {navLink.map((items) => (
            <Link
              onClick={handleOpen}
              className="font-medium"
              key={items.title}
              href={items.src}
            >
              {items.title}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  )
}

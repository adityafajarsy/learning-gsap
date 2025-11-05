import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { navLinks } from '../constants'

const Navbar = () => {
  const [lastScroll, setLastScroll] = useState(0)
  const [navVisible, setNavVisible] = useState(true)

  useGSAP(() => {
    gsap.fromTo(
      'nav',
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }
    )
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY

      // Scroll ke bawah → sembunyikan navbar
      if (currentScroll > lastScroll && currentScroll > 80) {
        if (navVisible) {
          setNavVisible(false)
          gsap.to('nav', { y: -100, opacity: 0, duration: 0.3, ease: 'power2.inOut' })
        }
      }

      // Scroll ke atas → munculkan lagi navbar
      else if (currentScroll < lastScroll) {
        if (!navVisible) {
          setNavVisible(true)
          gsap.to('nav', { y: 0, opacity: 1, duration: 0.2, ease: 'power2.out' })
        }
      }

      setLastScroll(currentScroll)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScroll, navVisible])

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 text-white transition-all duration-500"
    >
      <div className="flex justify-between items-center px-8 py-4">
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" className="w-8 h-8" />
          <p className="font-bold text-lg tracking-wide">Leveldva</p>
        </a>

        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="hover:text-red-400 transition-colors duration-300">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

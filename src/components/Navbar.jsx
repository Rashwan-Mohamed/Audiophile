/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context'
import Cart from './Cart'
function Navbar() {
  const { cart } = useGlobalContext()
  const [isHome, setIsHome] = useState(useLocation())
  const [scrolled, setScrolled] = useState(false)
  const [cartShow, setCartShow] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const bad = useRef(0)
  useEffect(() => {
    setIsHome(() => location.pathname)
  }, [location])


  useEffect(() => {
    if (cartShow === true) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'scroll'
    }
  }, [cartShow])
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 200) {
        setScrolled(() => true)
      } else {
        setScrolled(() => false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <nav
      style={{
        backgroundColor: isHome === '/' ? 'rgb(25, 25, 25)' : 'rgb(0, 0, 0)',
      }}
    >
      <div className={scrolled ? 'navWrapper navScrolled' : 'navWrapper'}>
        <picture onClick={() => navigate('/')}>
          <source
            srcSet='\src\assets\shared\desktop\logo.svg '
            sizes='(min-width:1024px)'
          />
          <source
            srcSet='\src\assets\shared\tablet\logo.svg '
            sizes='(min-width:481px)'
          />
          <source
            srcSet='\src\assets\shared\mobile\logo.svg'
            media='(max-width:480px)'
          />
          <img
            srcSet='\src\assets\shared\desktop\logo.svg'
            alt='audiophile logo'
          />
        </picture>

        <ul className='cats'>
          <li className={isHome === '/' ? 'here' : 'undefined'}>
            <Link to={'/'}>Home</Link>
          </li>
          <li className={isHome === '/headphones' ? 'here' : 'undefined'}>
            <Link to={'/headphones'}>Headphones</Link>
          </li>
          <li className={isHome === '/speakers' ? 'here' : 'undefined'}>
            <Link to={'/speakers'}>Speakers</Link>
          </li>
          <li className={isHome === '/earphones' ? 'here' : 'undefined'}>
            <Link to={'/earphones'}>Earphones</Link>
          </li>
        </ul>
        <div ref={bad} onClick={() => setCartShow(!cartShow)} className='press'>
          {cart.length > 0 && <span>{cart.length}</span>}
          <img src='\src\assets\shared\desktop\icon-cart.svg' alt='icon-cart' />
        </div>
      </div>
      {cartShow && <Cart bad={bad} setCartShow={setCartShow}></Cart>}
    </nav>
  )
}

export default Navbar

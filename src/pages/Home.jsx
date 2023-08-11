import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Category from '../components/Category'
import SeeProduct from '../components/SeeProduct'
import Bringing from '../components/Bringing'
import Footer from '../components/Footer'
function Home() {
  const naviage = useNavigate()
  return (
    <>
      <header className='homeHeader'>
        <div className='wrapper'>
          <article className='heleft'>
            <p className='newProduct'>NEW PRODUCT</p>
            <h1>XX99 MARK II HEADPHONES</h1>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button
              onClick={() => naviage('/product_detail/xx99-mark-ii')}
              className='seePro'
            >
              SEE PRODUCT
            </button>
          </article>
        </div>
      </header>
      <main>
        <Category></Category>
        <section className='stein'>
          <picture>
            <source
              media='(min-width:1024px)'
              srcSet='src/assets/home/desktop/image-speaker-zx9.png'
            />
            <source
              media='(min-width:521px)'
              srcSet='src/assets/home/tablet/image-speaker-zx9.png'
            />
            <source
              media='(max-width:520px)'
              srcSet='src/assets/home/mobile/image-speaker-zx9.png'
            />
            <img
              src='src/assets/home/desktop/image-speaker-zx9.png'
              alt='zx9-speaker'
            />
          </picture>
          <article>
            <h1>ZX9 SPEAKER</h1>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <SeeProduct where={'/product_detail/zx9'}></SeeProduct>
          </article>
        </section>
        <section className='z7x'>
          <h2>ZX7 SPEAKER</h2>
          <SeeProduct where={'/product_detail/z7x'}></SeeProduct>
        </section>
        <section className='yx1'>
          <picture>
            <source
              srcSet='src/assets/home/desktop/image-earphones-yx1.jpg'
              media='(min-width:1024px)'
            />
            <source
              srcSet='src/assets/home/tablet/image-earphones-yx1.jpg'
              media='(min-width:521px)'
            />
            <source
              srcSet='src/assets/home/mobile/image-earphones-yx1.jpg'
              media='(max-width:520px)'
            />
            <img
              src='src/assets/home/desktop/image-earphones-yx1.jpg'
              alt='speaker-zx7'
            />
          </picture>
          <section className='z7x'>
            <h2>YX1 EARPHONES</h2>
            <SeeProduct where={'/product_detail/yx1'}></SeeProduct>
          </section>
        </section>
        <Bringing></Bringing>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Home

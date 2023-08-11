import React from 'react'

function Bringing() {
  return (
    <section className='bringing'>
      <article>
        <h1>
          Bringing you the <span className='best'>best</span> audio gear
        </h1>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </article>
      <picture>
        {' '}
        <source
          srcSet='/src/assets/shared/desktop/image-best-gear.jpg'
          media='(min-width:1024px)'
        />
        <source
          srcSet='/src/assets/shared/tablet/image-best-gear.jpg'
          media='(min-width:521px)'
        />
        <source
          srcSet='/src/assets/shared/mobile/image-best-gear.jpg'
          media='(max-width:520px)'
        />
        <img
          src='/src/assets/shared/desktop/image-best-gear.jpg'
          alt='image-best-gear'
        />
      </picture>
    </section>
  )
}

export default Bringing

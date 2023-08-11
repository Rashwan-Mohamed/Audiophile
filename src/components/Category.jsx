// import React from 'react'
import { Link } from 'react-router-dom'
function Category({ setOpen }) {
  return (
    <section className='mightKnow'>
      <Link
        onClick={() => {
          if (setOpen) {
            setOpen(false)
          }
        }}
        to={'/headphones'}
      >
        <picture>
          <img
            src='/assets/shared/desktop/image-headphones.png'
            alt='mark-one-headphones'
          />
        </picture>{' '}
        <h5>headphone</h5>
        <div>
          shop{' '}
          <span>
            <img
              src='/assets/shared/desktop/icon-arrow-right.svg'
              alt='shop'
            />
          </span>
        </div>
      </Link>
      <Link
        onClick={() => {
          if (setOpen) {
            setOpen(false)
          }
        }}
        to={'/speakers'}
      >
        <picture>
          <img
            src='/assets/shared/desktop/image-speakers.png'
            alt='mark-one-headphones'
          />
        </picture>{' '}
        <h5>speakers</h5>
        <div>
          shop{' '}
          <span>
            <img
              src='/assets/shared/desktop/icon-arrow-right.svg'
              alt='shop'
            />
          </span>
        </div>
      </Link>{' '}
      <Link
        onClick={() => {
          if (setOpen) {
            setOpen(false)
          }
        }}
        to={'/earphones'}
      >
        <picture>
          <img
            src='/assets/shared/desktop/image-earphones.png'
            alt='mark-one-headphones'
          />
        </picture>{' '}
        <h5>earphones</h5>
        <div>
          shop{' '}
          <span>
            <img
              src='/assets/shared/desktop/icon-arrow-right.svg'
              alt='shop'
            />
          </span>
        </div>
      </Link>
    </section>
  )
}

export default Category

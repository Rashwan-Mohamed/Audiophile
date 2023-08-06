import React from 'react'
import SeeProduct from './SeeProduct'
function ProductCat({
  product,
  feature,
  detail,
  label,
  alt,
  place,
  price,
  link,
  turn,
}) {
  let seso = place.split('/')
  return (
    <section className='ProductCat'>
      {turn && (
        <picture>
          <source srcSet={`src/assets/${seso[0]}/desktop/${seso[2]}`} />
          <source srcSet={`src/assets/${seso[0]}/tablet/${seso[2]}`} />
          <source srcSet={`src/assets/${seso[0]}/mobile/${seso[2]}`} />
          <img src={`src/assets/${seso[0]}/desktop/${seso[2]}`} alt={alt} />
        </picture>
      )}

      <article className='details'>
        <p className='desc'>{feature}</p>
        <h1>{product}</h1>
        <p className='paraDetail'>{detail}</p>
        <SeeProduct where={link} sases={'seeProduct'}></SeeProduct>
      </article>

      {!turn && (
        <picture>
          <source srcSet={`src/assets/${seso[0]}/desktop/${seso[2]}`} />
          <source srcSet={`src/assets/${seso[0]}/tablet/${seso[2]}`} />
          <source srcSet={`src/assets/${seso[0]}/mobile/${seso[2]}`} />
          <img src={`src/assets/${seso[0]}/desktop/${seso[2]}`} alt={alt} />
        </picture>
      )}
    </section>
  )
}

export default ProductCat

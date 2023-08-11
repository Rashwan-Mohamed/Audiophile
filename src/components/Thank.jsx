import react from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context'

function Thank({ cartProducts, grand, setThank }) {
  const { removeAll } = useGlobalContext()

  console.log(cartProducts)
  const navigate = useNavigate()
  return (
    <section className='finalGoodBye cartOverlay'>
      <section className='sectionBye'>
        <div className='doneRight'>✓</div>
        <h1>thank you for your order</h1>

        <p>You will receive an email confirmation shortly.</p>

        <div className='summerizeo'>
          <ul className='disPro'>
            {cartProducts.length >= 1 &&
              cartProducts.map((item) => {
                const { product, price, cartImg, num, id } = item
                return (
                  <li key={id}>
                    <img src={`/src/assets/${cartImg}`} alt={product} />
                    <span> {product}</span>
                    <span> $ {price}</span>
                    <span>x{num}</span>
                  </li>
                )
              })}
          </ul>
          <div className='grandTotal'>
            <span>grand total:</span> $ {grand}
          </div>
        </div>
        <button
          onClick={() => {
            removeAll()
            setThank(false)
            document.body.style.overflowY = 'scroll'
            navigate('/')
          }}
          className='seePro'
        >
          BACK TO HOME
        </button>
      </section>
    </section>
  )
}

export default Thank

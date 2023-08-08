import react from 'react'
import { useNavigate } from 'react-router-dom'

function Thank({ cartProducts, grand }) {


  console.log(cartProducts);
  const navigate = useNavigate()
  return (
    <section className='finalGoodBye cartOverlay'>
      <section className='sectionBye'>
        <div className="doneRight">
          ✓
        </div>
        <h1>thank you for your order</h1>

        <p>You will receive an email confirmation shortly.</p>

        <div className="summerizeo">

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
          <div className="grandTotal">
            <span>grand total:</span> $ {grand}
          </div>
        </div>
        <button onClick={()=>{navigate('/')}} className="seePro">BACK TO HOME</button>




      </section>
    </section>
  )
}

export default Thank

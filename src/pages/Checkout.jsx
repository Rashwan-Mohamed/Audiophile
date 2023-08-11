import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import { useGlobalContext } from '../context'
import { useNavigate } from 'react-router-dom'
import data from '../data/product-data.json'
import Thank from '../components/Thank'

function Checkout() {
  const navigate = useNavigate()
  const { cart } = useGlobalContext()
  const [cartProducts, setcartProducts] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [first, setFirst] = useState(true)
  const [thank, setThank] = useState(false)
  const [enter, setEnter] = useState({
    sname: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
    city: '',
    country: '',
    pin: '',
    money: '',
  })
  const [messeage, setMessage] = useState(() => {
    let newl = {}

    for (let prop in enter) {
      newl[prop] = false
    }
    return newl
  })
  const getTotal = () => {
    let total = 0

    if (cartProducts.length >= 1) {
      cartProducts.forEach((item) => (total += item.price * item.num))
    }
    return total
  }
  useEffect(() => {
    let setl = []
    data.forEach((item) => {
      if (cart.length >= 1) {
        cart.forEach((cars) => {
          if (cars.id === item.id) {
            setl.push({ ...cars, ...item })
          }
        })
      }
    })
    setcartProducts(() => setl)
  }, [cart])
  useEffect(() => {
    if (submitted) {
      console.log('changge!')
      checkInpit('sname', enter.sname < 1)
      checkInpit('email', !enter.email.match(/[^\s@]+@[^\s@]+\.[^\s@]+/))
      checkInpit('phone', !enter.phone.match(/^\+?\d{8,15}$/))
      checkInpit('address', !enter.address.match(/^[a-zA-Z0-9\s\-\,\.\']+$/))
      checkInpit('zip', !/^\d+$/.test(enter.zip))
      checkInpit('city', !/^\w+$/.test(enter.city))
      checkInpit('country', !/^\w+$/.test(enter.country))
      checkInpit('pin', !/^\d{4}$/.test(enter.pin))
      checkInpit('money', !/^\d{10,}$/.test(enter.money))
    }
  }, [enter])
  let proceed
  const checkInpit = (sero, test) => {
    if (test) {
      setMessage((old) => {
        let news = { ...old }
        news[sero] = true
        return news
      })
      proceed = false
    } else {
      setMessage((old) => {
        let news = { ...old }
        news[sero] = false
        return news
      })
    }
  }
  const handleSubmit = (event) => {
    proceed = true
    setSubmitted(true)
    setThank(false)
    event.preventDefault()
    checkInpit('sname', enter.sname < 1)
    checkInpit('email', !enter.email.match(/[^\s@]+@[^\s@]+\.[^\s@]+/))
    checkInpit('phone', !enter.phone.match(/^\+?\d{8,15}$/))
    checkInpit('address', !enter.address.match(/^[a-zA-Z0-9\s\-\,\.\']+$/))
    checkInpit('zip', !/^\d+$/.test(enter.zip))
    checkInpit('city', !/^\w+$/.test(enter.city))
    checkInpit('country', !/^\w+$/.test(enter.country))
    if (first) {
      checkInpit('money', !/^\d{10,}$/.test(enter.money))
      checkInpit('pin', !/^\d{4}$/.test(enter.pin))
    }

    if (proceed) {
      setThank(true)
    }
  }
  useEffect(() => {
    if (thank) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'scroll'
    }
  }, [thank])
  return (
    <>
      <div className='checkoutWrapper'>
        {thank && (
          <Thank
            grand={Math.ceil(1.2 * getTotal() + 50)}
            cartProducts={cartProducts}
            setThank={setThank}
          ></Thank>
        )}
        <main className='checkoutMain'>
          <button onClick={() => navigate(-1)} className='goBack'>
            go back
          </button>
          <section className='fillForm'>
            <form
              id='mainForm'
              onSubmit={(event) => handleSubmit(event)}
              action=''
            >
              <h2>checkout</h2>
              <div className='billing'>
                <p>billing details</p>
                <div
                  className={
                    messeage.sname ? 'form-row formDanger' : 'form-row'
                  }
                >
                  {messeage.sname && (
                    <span className='SpanMessage'>please enter a number</span>
                  )}

                  <label htmlFor='name'>name</label>
                  <input
                    placeholder='your pretty name?'
                    type='text'
                    id='name'
                    name='name'
                    onChange={(e) => {
                      setEnter((old) => {
                        return { ...old, sname: e.target.value }
                      })
                    }}
                    value={enter.sname}
                  />
                </div>
                <div
                  className={
                    messeage.email ? 'form-row formDanger' : 'form-row'
                  }
                >
                  {messeage.email && (
                    <span className='SpanMessage'>
                      please enter a valid email!
                    </span>
                  )}
                  <label htmlFor='email'>Email Address</label>
                  <input
                    placeholder='prettyName@hotmail.com'
                    type='text'
                    id='email'
                    name='email'
                    onChange={(e) => {
                      setEnter((old) => {
                        return { ...old, email: e.target.value }
                      })
                    }}
                    value={enter.email}
                  />
                </div>
                <div
                  className={
                    messeage.phone ? 'form-row formDanger' : 'form-row'
                  }
                >
                  {messeage.phone && (
                    <span className='SpanMessage'>
                      please enter a valid mobile number
                    </span>
                  )}
                  <label htmlFor='Phone'>Phone Number</label>
                  <input
                    placeholder='+201234567891'
                    type='phone number'
                    id='Phone'
                    name='Phone'
                    onChange={(e) => {
                      setEnter((old) => {
                        return { ...old, phone: e.target.value }
                      })
                    }}
                    value={enter.phone}
                  />
                </div>
              </div>
              <div className='shipping'>
                <p>Shipping info</p>
                <div
                  className={
                    messeage.address ? 'form-row formDanger' : 'form-row'
                  }
                >
                  {messeage.address && (
                    <span className='SpanMessage'>
                      please enter a valid <address></address>
                    </span>
                  )}
                  <label htmlFor='Address'>Address</label>
                  <input
                    placeholder='11 ANYWHERE'
                    type='Address'
                    id='Address'
                    name='Address'
                    onChange={(e) => {
                      setEnter((old) => {
                        return { ...old, address: e.target.value }
                      })
                    }}
                    value={enter.address}
                  />
                </div>
                <div
                  className={messeage.zip ? 'form-row formDanger' : 'form-row'}
                >
                  {messeage.zip && (
                    <span className='SpanMessage'>
                      it must be a valid number! <address></address>
                    </span>
                  )}
                  <label htmlFor='Zip'>Zip Code</label>
                  <input
                    placeholder='11324'
                    type='text'
                    onChange={(e) => {
                      setEnter((old) => {
                        return { ...old, zip: e.target.value }
                      })
                    }}
                    value={enter.zip}
                    id='Zip'
                    name='Zip'
                  />
                </div>
                <div
                  className={messeage.city ? 'form-row formDanger' : 'form-row'}
                >
                  {messeage.city && (
                    <span className='SpanMessage'>
                      provide city <address></address>
                    </span>
                  )}
                  <label htmlFor='City'>City</label>
                  <input
                    placeholder='Gotham'
                    type='City'
                    id='City'
                    name='City'
                    onChange={(e) => {
                      setEnter((old) => {
                        return { ...old, city: e.target.value }
                      })
                    }}
                    value={enter.city}
                  />
                </div>
                <div
                  className={
                    messeage.country ? 'form-row formDanger' : 'form-row'
                  }
                >
                  {messeage.country && (
                    <span className='SpanMessage'>
                      provide country <address></address>
                    </span>
                  )}
                  <label htmlFor='Country'>Country</label>
                  <input
                    placeholder='Egypt'
                    type='text'
                    id='Country'
                    name='Country'
                    onChange={(e) => {
                      setEnter((old) => {
                        return { ...old, country: e.target.value }
                      })
                    }}
                    value={enter.country}
                  />
                </div>
              </div>
              <div className='payment'>
                <p>Shipping info</p>
                <label>Payment method</label>
                <div
                  style={{
                    boxShadow: first
                      ? '0px 0px 0px 2px #d87d4a'
                      : '0px 0px 0px 1px rgb(207, 207, 207)',
                  }}
                  onClick={() => {
                    setFirst(true)
                  }}
                  className='select'
                >
                  {' '}
                  <span className='middleCircle'>
                    {first && <span className='ciro'></span>}
                  </span>{' '}
                  e-Money
                </div>
                <div
                  style={{
                    border: !first
                      ? '0px 0px 0px 2px #d87d4a'
                      : '0px 0px 0px 1px rgb(207, 207, 207)',
                  }}
                  onClick={() => {
                    setFirst(false)
                  }}
                  className='select'
                >
                  <span className='middleCircle'>
                    {!first && <span className='ciro'></span>}
                  </span>
                  Cash on Delivery
                </div>

                {first ? (
                  <>
                    <div
                      className={
                        messeage.money ? 'form-row formDanger' : 'form-row'
                      }
                    >
                      {messeage.money && (
                        <span className='SpanMessage'>
                          must be a number <address></address>
                        </span>
                      )}
                      <label htmlFor='Country'>e-Money Number </label>
                      <input
                        placeholder='123123123'
                        type='text'
                        id='e-Money'
                        name='e-Money'
                        onChange={(e) => {
                          setEnter((old) => {
                            return { ...old, money: e.target.value }
                          })
                        }}
                        value={enter.money}
                      />
                    </div>
                    <div
                      className={
                        messeage.pin ? 'form-row formDanger' : 'form-row'
                      }
                    >
                      {messeage.pin && (
                        <span className='SpanMessage'>
                          must be a number <address></address>
                        </span>
                      )}
                      <label htmlFor='Pin'>e-Money Pin</label>
                      <input
                        placeholder='4684'
                        type='text'
                        id='Pin'
                        name='Pin'
                        onChange={(e) => {
                          setEnter((old) => {
                            return { ...old, pin: e.target.value }
                          })
                        }}
                        value={enter.pin}
                      />
                    </div>
                  </>
                ) : (
                  <div className='two-rows'>
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0'
                      viewBox='0 0 512 512'
                      color='#D87D4A'
                      height='48'
                      width='48'
                      xmlns='http://www.w3.org/2000/svg'
                      style={{ color: 'rgb(216, 125, 74)', minWidth: '48px' }}
                    >
                      <path d='M225.814 32.316c-3.955-.014-7.922-.01-11.9.007-19.147.089-38.6.592-58.219 1.32l5.676 24.893c20.431-2.31 42.83-4.03 65.227-4.89 12.134-.466 24.194-.712 35.892-.65 35.095.183 66.937 3.13 87.77 11.202l8.908 3.454-3.977 8.685c-29.061 63.485-35.782 124.732-31.228 184.826 2.248-71.318 31.893-134.75 70.81-216.068-52.956-8.8-109.634-12.582-168.959-12.78zm28.034 38.79c-8.74.007-17.65.184-26.559.526-41.672 1.6-83.199 6.49-110.264 12.096 30.233 56.079 54.69 112.287 70.483 167.082a71.934 71.934 0 0 1 5.894.045c4.018.197 7.992.742 11.875 1.59-16.075-51.397-34.385-98.8-57.146-146.131l-5.143-10.694 11.686-2.068c29.356-5.198 59.656-7.21 88.494-7.219 1.922 0 3.84.007 5.748.024 18.324.16 35.984 1.108 52.346 2.535l11.054.965-3.224 10.617c-18.7 61.563-22.363 127.678-11.79 190.582.176.163.354.325.526.49 3.813-1.336 7.38-2.698 10.705-4.154-8.254-67.394-4.597-136.923 26.229-209.201-17.202-4.383-43.425-6.674-72.239-7.034a656.656 656.656 0 0 0-8.675-.05zm144.945 7.385c-30.956 65.556-52.943 118.09-56.547 174.803 20.038-66.802 58.769-126.685 102.904-165.158a602.328 602.328 0 0 0-46.357-9.645zM103.832 97.02c-18.76 3.868-37.086 8.778-54.812 15.562 8.626 7.48 24.22 21.395 43.14 39.889 8.708-8.963 17.589-17.818 26.852-25.87a1067.587 1067.587 0 0 0-15.18-29.581zm142.023 7.482c-13.62-.066-27.562.324-41.554 1.293-1.468 13.682-9.56 26.482-19.225 39.07 15.431 36.469 28.758 73.683 40.756 113.194 18.375 5.42 36.554 11.827 51.28 19.504-5.47-42.458-4.722-85.963 2.38-128.508-12.885-13.31-19.597-28.09-20.135-44.34a621.48 621.48 0 0 0-13.502-.213zm182.018 26.985c-24.73 29.3-46.521 65.997-61.37 105.912 27.264-38.782 60.79-69.032 96.477-90.4a1318.664 1318.664 0 0 0-35.107-15.512zm-300.74 11.959c-14.594 13.188-29.014 29.017-44.031 44.097 32.289 19.191 59.791 41.918 82.226 67.66 1.393-.526 2.8-.999 4.215-1.43-10.498-36.096-24.885-73.033-42.41-110.327zM360.52 268.198c-16.397 19.788-31.834 30.235-53.09 38.57 2.391 9.22-1.16 19.805-9.334 27.901-4.808 4.761-10.85 10.188-19.684 13.715a62.896 62.896 0 0 0 3.9 2.127c12.364 6.17 34.207 4.18 54.5-5.049 20.23-9.2 38.302-25.092 45-41.191 3.357-9.05.96-13.77-4.917-20.692-4.184-4.925-10.295-9.89-16.375-15.38zm-170.079.586c-10.715-.098-21.597 2.994-30.59 9.76-12.79 9.623-22.65 26.784-22.738 55.934v.2l-.01.2c-2.92 61.381 1.6 89.7 10.555 105.065 7.904 13.562 21.05 20.054 40.28 31.994.916-2.406 1.87-5.365 2.765-9.098 2.277-9.499 4.161-22.545 5.355-36.975 2.389-28.858 2.04-63.51-1.955-88.445l-2.111-13.19 13.016 2.995c31.615 7.273 49.7 8.132 60.2 6.28 10.502-1.854 14.061-5.523 20.221-11.624 5.79-5.732 5.682-7.795 4.456-11.021-1.227-3.227-6.149-8.545-14.5-13.633-16.703-10.176-45.085-19.611-71.614-26.647a53.988 53.988 0 0 0-13.33-1.795zm189.1 69.416c-10.013 9.754-22.335 17.761-35.277 23.647-20.983 9.542-44.063 13.907-63.211 7.553-6.76 2.516-10.687 5.407-12.668 7.8-2.718 3.284-2.888 5.7-1.967 9.16.92 3.46 3.665 7.568 7.059 10.524 3.393 2.956 7.426 4.492 8.959 4.564 46.794 2.222 67.046-11.207 92.277-26.783 7.358-4.542 10.174-13.743 9.469-22.931-.353-4.594-1.69-8.911-3.233-11.63a9.009 9.009 0 0 0-1.408-1.904zm-166.187 9.096c2.727 25.068 2.772 54.314.642 80.053-1.247 15.072-3.175 28.779-5.789 39.685-1.137 4.746-2.388 8.954-3.9 12.659l146.697-6.465c-1.656-6.149-3.344-12.324-5.031-18.502a127.004 127.004 0 0 1-17.24 4.424l.044.73-8.316.518c-5.121.614-10.452.953-15.983.992l-83.86 5.21 2.493-11.607c7.947-37.006 8.68-69.589 3.778-105.234a353.433 353.433 0 0 1-13.536-2.463zm31.972 4.684c3.948 31.933 3.473 62.41-2.406 95.2l19.264-1.196a39.44 39.44 0 0 1-6.1-14.778c-1.296-6.88-.575-14.538 3.926-20.87.199-.281.414-.55.627-.821-5.246-4.845-9.628-11.062-11.614-18.524-2.114-7.944-.794-17.67 5.497-25.27 2.079-2.51 4.592-4.776 7.543-6.816-2.61-2.08-4.898-4.285-6.874-6.582-3.064.021-6.345-.093-9.863-.343zm132.666 41.785c-23.456 14.253-49.81 27.876-96.41 25.664a26.402 26.402 0 0 1-4.518-.615c-1.233.553-1.891 1.256-2.382 1.947-.963 1.355-1.532 3.8-.909 7.113 1.248 6.627 7.525 13.889 13.37 14.569 41.385 4.813 69.979-8.726 87.341-24.477 8-7.258 8.068-11.9 6.89-16.951-.59-2.523-1.89-4.969-3.382-7.25zm-6.683 49.062a114.657 114.657 0 0 1-8.547 4.86c1.65 6.051 3.304 12.102 4.937 18.154l19.92-3.572c-5.14-4.387-9.162-8.954-12.39-13.496-1.442-2.029-2.713-4.001-3.92-5.946z'></path>
                    </svg>
                    <p>
                      The ‘Cash on Delivery’ option enables you to pay in cash
                      when our delivery courier arrives at your residence. Just
                      make sure your address is correct so that your order will
                      not be cancelled.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </section>
          <section className='carto reviseDetails'>
            <ul className='disPro'>
              {cartProducts.length >= 1 &&
                cartProducts.map((item) => {
                  const { product, price, cartImg, num, id } = item
                  return (
                    <li key={id}>
                      <img src={`/assets/${cartImg}`} alt={product} />
                      <span> {product}</span>
                      <span> $ {price}</span>
                      <span>x{num}</span>
                    </li>
                  )
                })}
            </ul>
            {cartProducts.length >= 1 && (
              <>
                <h5>total</h5>
                <span>$ {getTotal()}</span>
                <h5>shipping</h5>
                <span>$ 50</span>
                <h5>VAT (INCLUDED)</h5>
                <span>{Math.ceil(0.2 * getTotal())}</span>
                <h5>GRAND TOTAL</h5>
                <span>${Math.ceil(1.2 * getTotal() + 50)}</span>
              </>
            )}

            <button
              type='submit'
              form='mainForm'
              onClick={() => {
                if (cartProducts.length >= 1) {
                  return
                } else {
                  navigate('/')
                }
              }}
              className={cartProducts.length < 1 ? 'seePro noItems' : 'seePro'}
            >
              {cartProducts.length < 1 ? 'back to purchase' : 'CONTINUE'}
            </button>
          </section>
        </main>
      </div>
      <Footer className={'checkoutFooter'}></Footer>
    </>
  )
}

export default Checkout

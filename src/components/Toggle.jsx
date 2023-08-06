import React, { useState } from 'react'
import { useGlobalContext } from '../context'

function Toggle({ amount, id }) {
  const { increase, decrease, removeAll } = useGlobalContext()
  const [num, setNum] = useState(amount)
  console.log(num)
  return (
    <div className='addMore'>
      <button
        onClick={() => {
          decrease(id)
          if (num !== 1) {
            setNum(num - 1)
          }
        }}
      >
        -
      </button>
      {num}
      <button
        onClick={() => {
          increase(id)
          setNum(num + 1)
        }}
      >
        +
      </button>
    </div>
  )
}

export default Toggle

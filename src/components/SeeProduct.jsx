import React from 'react'
import { Link } from 'react-router-dom'
Link
function SeeProduct({ where, sases }) {
  return (
    <Link  className={sases ? 'seePro' : 'sawPro'} to={where}>
      SEE PRODUCT
    </Link>
  )
}

export default SeeProduct

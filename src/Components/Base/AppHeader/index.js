import React from 'react'
import { Cart3, Cart4, CartCheck, CartCheckFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const AppHeader = () => {
  return (
    <div className='parent-header' >
    <div className='header' >
      <ul>
       <li> <Link to={'/'} >Home</Link></li>
        {/* <li>Products</li> */}
        <li><Link to={'/cart'}> <Cart4 size={20} /></Link></li>
        {/* <li></li> */}
      </ul>
    </div>
    </div>
  )
}

export default AppHeader
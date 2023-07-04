import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <Link to='/addproducts'>
        <button>პროდუქტის დამატება</button>
    </Link>
  )
}

export default Admin
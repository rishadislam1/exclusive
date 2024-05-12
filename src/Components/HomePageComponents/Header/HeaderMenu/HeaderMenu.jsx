import React from 'react'
import './HeaderMenu.css'
import { FaAngleRight } from 'react-icons/fa'

export default function HeaderMenu() {
  return (
    <div className='d-flex gap-lg-5'>
        <ul>
            <li className='d-flex align-items-center'>Woman’s_Fashion <FaAngleRight className='ms-2'/></li>
            <li>Men’s Fashion  <FaAngleRight className='ms-2'/></li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby’s & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
        </ul>
        <div className="vl"></div>
    </div>
  )
}

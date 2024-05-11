import React from 'react'
import HeaderMenu from './HeaderMenu/HeaderMenu'
import HeaderSlider from './HeaderSlider/HeaderSlider'

export default function Header() {
  return (
    <div className='d-lg-flex gap-5'>
        <HeaderMenu/>
        <HeaderSlider/>
    </div>
  )
}

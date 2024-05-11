import React from 'react'
import Header from '../../Components/HomePageComponents/Header/Header'
import TodaysComponent from '../../Components/HomePageComponents/TodaysComponent/TodaysComponent'
import Categories from '../../Components/HomePageComponents/Categories/Categories'

export default function HomePage() {
  return (
    <div>
        <Header/>
        <TodaysComponent/>
        <Categories/>
    </div>
  )
}

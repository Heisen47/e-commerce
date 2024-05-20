import React from 'react'
import MainCaraousel from '../../Components/HomeCarousel/MainCaraousel'
import HomeSectionCaraousel from '../../Components/HomeSectionCaraousel/HomeSectionCaraousel'
import { mens_kurta } from '../../../Data/mens_kurta'

const HomePage = () => {
  return (
    <div>
        <MainCaraousel/>

    <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCaraousel data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCaraousel data={mens_kurta} sectionName={"Men's shoes"}/>
        <HomeSectionCaraousel data={mens_kurta} sectionName={"Men's shirt"}/>
        <HomeSectionCaraousel data={mens_kurta} sectionName={"Women's Saree"}/>
        <HomeSectionCaraousel data={mens_kurta} sectionName={"Women's dress"}/>
    </div>
    </div>
  )
}

export default HomePage
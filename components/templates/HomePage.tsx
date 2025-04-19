import React from 'react'
import Banner from '../modules/Banner'
import Attributes from '../modules/Attributes'
import Definition from '../modules/Definition'
import Companies from '../modules/Companies'
import Instruction from '../modules/Instruction'
import Guide from '../modules/Guide'
import Restrictions from '../modules/Restrictions'

const HomePage = () => {
  return (
    <div className='container'>
        <Banner/>
        <Attributes/>
        <Definition/>
        <Companies/>
        <Instruction/>
        <Guide/>
        <Restrictions/>
    </div>
  )
}

export default HomePage
import React, { useContext, useEffect, useState } from 'react'

import "@theme-toggles/react/css/Expand.css"
import { Expand } from "@theme-toggles/react"
import { ThemeContext } from '../context/ThemeContext'



function SunMoon() {
  const [isToggled, setToggle] = useState(false)
  const {theme,handleThemeChange} = useContext(ThemeContext)
  
  useEffect(() => {
    setToggle(theme === 'light')
    console.log(theme)
  }, [theme])
  

  return (
    <Expand toggled={isToggled} toggle={handleThemeChange} className='w-full h-full' duration={500} />
  )
}

export default SunMoon
import * as React from "react"
import { useTheme } from 'next-themes'
const Themefind = () => {
    const { theme, setTheme } = useTheme()
    console.log("in theme find",theme)
  return theme;
  
}

export default Themefind
import { useState } from 'react'

export const useToggle = () =>  {
  const [expand, setExpand] = useState(false)
  const toggleExpand = () => {
    setExpand(prevState => !prevState)
  }
  const value = {
    expand,
    toggleExpand
  }
  return value;
}
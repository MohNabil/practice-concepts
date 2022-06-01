import React, { useContext } from 'react'
import { AccordionContext, AccordionContextTypes } from './accordion'
import styles from './accordionStyles.module.css'

type AccHeaderProps = {
  children: React.ReactNode,
}

const AccordionHeader = ({children}: AccHeaderProps) => {
  const {expand, toggleExpand} = useContext(AccordionContext) as AccordionContextTypes

  return (
    <button className={styles.accordionHeaderButton} onClick={toggleExpand}>
      {children} <span>{expand ? '-' : '+'}</span>
    </button>
  )
}

export default AccordionHeader
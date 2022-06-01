import React, { useContext } from 'react'
import { AccordionContext, AccordionContextTypes } from './accordion'
import styles from './accordionStyles.module.css'

type AccContentProps = {
  children: React.ReactNode,
}

const AccordionContent = ({children}: AccContentProps) => {
  const {expand} = useContext(AccordionContext) as AccordionContextTypes
  return (
    <>
      {expand && (
        <div className={styles.accordionContent}>
          {children}
        </div>)
      }
    </>
  )
}

export default AccordionContent
import { createContext } from 'react'
import { useToggle } from '../../utils/useToggle'
import AccordionContent from './accordionContent'
import AccordionHeader from './accordionHeader'
import styles from './accordionStyles.module.css'

type AccordionProps = {
  title: string | undefined,
  children: React.ReactNode
}

export type AccordionContextTypes = {
  expand: boolean,
  toggleExpand: () => void
}

export const AccordionContext= createContext<AccordionContextTypes | null>(null)
const {Provider} = AccordionContext

const Accordion = ({title, children}: AccordionProps) => {
  const {expand, toggleExpand} = useToggle()
  const value = {
    expand,
    toggleExpand,
  }
  return (
    <Provider value={value}>
      <div className={styles.accordionContainer}>
        <AccordionHeader>{title}</AccordionHeader>
        <AccordionContent>{children}</AccordionContent>
      </div>
    </Provider>
  )
}

export default Accordion
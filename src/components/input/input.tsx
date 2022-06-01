import React, { useRef } from 'react'

type InputProps = {
  setHeader: React.Dispatch<React.SetStateAction<string | undefined>>,
  setContent: React.Dispatch<React.SetStateAction<string | undefined>>
}
const Input = ({setHeader, setContent}: InputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const onHeaderClickHandler = () => {
    let value = inputRef.current?.value
    setHeader(value)
  }
  const onContentClickHandler = () => {
    const value = inputRef.current?.value
    setContent(value)
  }
  return (
    <div style={{margin: '1rem'}}>
      <input type='text' placeholder='add header or content' ref={inputRef}/>
      <button onClick={onHeaderClickHandler}>Add Header</button>
      <button onClick={onContentClickHandler}>Add Content</button>
    </div>
  )
}

export default Input
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './input';

test('when typing in input and click on add header button', () => {
  const setHeader = jest.fn()
  const setContent = jest.fn()
  render(<Input setContent={setContent} setHeader={setHeader}/>)
  userEvent.type(screen.getByRole('textbox'), 'Accordion 1')
  const addHeaderBtn = screen.getByText('Add Header')
  userEvent.click(addHeaderBtn)
  expect(setHeader).toHaveBeenCalledWith('Accordion 1')
})

test('when typing in input and click on add content button', () => {
  const setHeader = jest.fn()
  const setContent = jest.fn()
  render(<Input setContent={setContent} setHeader={setHeader}/>)
  userEvent.type(screen.getByRole('textbox'), 'Content 1')
  const addContentBtn = screen.getByText('Add Content')
  userEvent.click(addContentBtn)
  expect(setContent).toHaveBeenCalledWith('Content 1')
})
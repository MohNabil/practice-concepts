import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Accordion from './accordion';

test('when click on accordion the sign changes and the content appear', () => {
  render(<Accordion title='Accordion 1'>
    <div>Default Content</div>
  </Accordion>)

  const accordionButton = screen.getByRole('button')
  expect(accordionButton).toHaveTextContent('+')
  //for hidden element use query
  expect(screen.queryByText(/content/i)).not.toBeInTheDocument()
  userEvent.click(accordionButton)
  expect(accordionButton).toHaveTextContent('-')
  //for present element use get
  expect(screen.getByText(/content/i)).toBeInTheDocument()
})
import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a page', () => {
    const container = render(<Home />)
    const title = container.getByText("Test");
    expect("Test").toEqual(title.textContent);
  })
})

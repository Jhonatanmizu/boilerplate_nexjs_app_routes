import { render, screen } from '@testing-library/react'
// Component
import Main from '.'

describe('<Main/>', () => {
  it('should render heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', {
        name: /React avançado/i
      })
    ).toBeDefined()
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the colors correctly', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toHaveStyleRule('background-color', '#06092b')
  })
})

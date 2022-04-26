import { render, screen } from '@testing-library/react'
// import { MemoryRouter } from 'react-router-dom'

import App from './App'

describe('App functionality', () => {
  test('Should render the header', async () => {
    render(<App />)

    const username = await screen.findByText(/Vonta/i)
    expect(username).toBeInTheDocument()

    const logo = await screen.findByAltText('Alchemy Logo')
    expect(logo).toHaveClass('app-logo')
  })
})

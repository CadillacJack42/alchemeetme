import { render, screen } from '@testing-library/react'
import App from '../../App'

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should render the user profile', async () => {
  render(<App />)
  const avatar = await screen.findByAltText('avatar')
  expect(avatar).toHaveClass('object-fill')

  const username = await screen.findAllByText('Vonta')
  expect(username[1]).toHaveClass('text-3xl')

  const motto = screen.getByLabelText('motto')
  expect(motto).toHaveTextContent(/res non verba/i)

  const interestsHeader = await screen.findByText(/interests/i)
  expect(interestsHeader).toHaveClass('text-center text-xl')

  const headerImg = screen.getByRole('banner')
  const logo = await screen.findByAltText('Alchemy Logo')
  expect(headerImg).toContainElement(logo)

  const likeList = screen.getByRole('list')
  expect(likeList.children).toHaveLength(6)
  expect(likeList.children[0]).toHaveTextContent(/react/i)
  expect(likeList.children[5]).toHaveTextContent(/card games/i)
})

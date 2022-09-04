import {render} from '@testing-library/react'
import ProfilePage from './Profile.jsx'

describe('ProfilePage component', () => {
    it('render ProfilePage correctly', () => {
        const { container  } = render(<ProfilePage/>)
        expect(container.innerText).toMatch("<div>Страница Профиля</div>")
    })
})


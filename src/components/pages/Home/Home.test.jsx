import {render} from '@testing-library/react'
import HomePage from './Home.jsx'

describe('ProfilePage component', () => {
    it('render ProfilePage correctly', () => {
        const { container  } = render(<HomePage/>)
        expect(container.innerText).toMatch("<div>HomePage</div>")
    })
})


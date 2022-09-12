import {render} from '@testing-library/react'
import HomePage from './Home.jsx'

describe('HomePage component', () => {
    it('render HomePage correctly', () => {
        const { container  } = render(<HomePage/>)
        expect(container.innerText).toMatch("<div>HomePage</div>")
    })
})


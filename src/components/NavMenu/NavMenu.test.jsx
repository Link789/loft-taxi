import {render} from '@testing-library/react'
import NavMenu from "./NavMenu"

describe('NavMenu component', () => {
    it('render NavMenu correctly', () => {
        const navmenuContainer = render(<NavMenu/>)
        expect(navmenuContainer.querySelector(".navMenu")).toBeInTheDocument()
    })
})
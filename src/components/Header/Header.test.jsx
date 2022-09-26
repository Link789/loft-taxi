import {render,screen} from '@testing-library/react'
import Header from './Header.jsx'

describe('Header component', () => {
    it('render Header correctly', () => {
        render(<Header/>)
        const logo = screen.getByAltText('Логотип')
        expect(logo).toBeInTheDocument()
    })
})
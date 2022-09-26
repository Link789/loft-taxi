import {render,screen} from '@testing-library/react'
import Header from './Header.jsx'

describe('MapBox component', () => {
    it('render MapBox correctly', () => {
        render(<Header/>)
        const logo = screen.getByAltText('Логотип')
        expect(logo).toBeInTheDocument()
    })
})
import {render,screen} from '@testing-library/react'
import MapBox from './MapBox.jsx'

describe('MapBox component', () => {
    it('render MapBox correctly', () => {
        render(<MapBox/>)
        const logo = screen.getByAltText('Логотип')
        expect(logo).toBeInTheDocument()
    })
})
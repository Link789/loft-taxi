import {render,screen} from '@testing-library/react'
import MapPage from './Map.jsx'

 describe('MapPage component', () => {
     it('render MapPage correctly', () => {
         const mapContainer =  render(<MapPage/>);
         expect(mapContainer.querySelector('.map')).toBeInTheDocument();
     })
 })


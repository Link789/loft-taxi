import {render} from '@testing-library/react'
import RegistrationPage from './Registration.jsx'

describe('RegistrationPage component', () => {
    it('render RegistrationPage correctly', () => {
        const { container  } = render(<RegistrationPage/>)
        expect(container.innerHTML).toMatch('Регистрация')
    })
})


import {render} from '@testing-library/react'
import LoginPage from './Login.jsx'

describe('LoginPage component', () => {
    it('render LoginPage correctly', () => {
        const { container  } = render(<LoginPage/>)
        expect(container.innerHTML).toMatch('Войти')
    })
})


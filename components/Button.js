import styled from 'styled-components'
import { Button as BaseButton } from 'rebass'

const Button = styled(BaseButton)``

Button.defaultProps = {
  fontSize: 2,
  color: 'white',
  bg: 'black',
  py: 2,
  px: 2
}

export default Button

import styled from 'styled-components'
import { ButtonCircle as BaseButtonCircle } from 'rebass'

const ButtonCircle = styled(BaseButtonCircle)``

ButtonCircle.defaultProps = {
  fontSize: 2,
  color: 'white',
  bg: 'black',
  py: 2,
  px: 2
}

export default ButtonCircle

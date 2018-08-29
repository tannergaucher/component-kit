import styled from 'styled-components'
import { ButtonOutline as BaseButtonOutline } from 'rebass'

const ButtonOutline = styled(BaseButtonOutline)`
  &:hover {
    color: white;
    background: black;
  }
`

ButtonOutline.defaultProps = {
  fontSize: 2,
  bg: 'white',
  color: 'black',
  py: 2,
  px: 2
}

export default ButtonOutline

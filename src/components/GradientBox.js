import styled from 'styled-components'
import { background, layout } from 'styled-system'

const GradientBox = styled('div')(
  {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    background: 'linear-gradient(150deg, white 52%, #008ab4 52%)',
  },
  layout,
  background
)

export default GradientBox
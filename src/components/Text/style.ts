import styled from 'styled-components'
import { Props } from './index'

export const TextComponent = styled.p<Props>`
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => (props.typetext === 'primary' ? '#282a35' : '#949494')};
  line-height: 22px;
`

import { TextComponent } from './style'
export type Props = {
  typetext?: 'primary' | 'secondary'
  children: string
}

export const Text = ({ typetext = 'primary', children }: Props) => (
  <TextComponent typetext={typetext}>{children}</TextComponent>
)

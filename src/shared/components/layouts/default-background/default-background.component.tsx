import { ReactNode } from 'react'
import { Container } from './default-background.styles'

const DefaultBackground: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Container>{children}</Container>
}

export { DefaultBackground }

import { PropsWithChildren } from 'react';

import { Container, TitleSection, Content } from './card-section.styles';

type CardSectionProps = PropsWithChildren & {
  title: string
}

const CardSection: React.FC<CardSectionProps> = ({ title, children }) => {
  return (
    <Container>
      <TitleSection size='x12' font='MEDIUM'>
        {title}
      </TitleSection>
      
      <Content>
        {children}
      </Content>
    </Container>
  )
}

export { CardSection }
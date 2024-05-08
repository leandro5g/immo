
import { ButtonBack } from '@app/shared/components/buttons/button-back/button-back.component';
import { DefaultText } from '@app/shared/components/texts/default-text/default-text.component';

import { Container, Content, Subtitle } from './header-auth.styles';

type HeaderAuthProps = {
  title: string
  subTitle: string
}

const HeaderAuth: React.FC<HeaderAuthProps> = ({ title, subTitle }) => {
  return (
    <Container>
      <ButtonBack />
      <Content>
        <DefaultText font='MEDIUM' size='x24'>
          {title}
        </DefaultText>

        <Subtitle font='REGULAR' color={200} size='x14'>
        {subTitle}
        </Subtitle>
      </Content>
    </Container>
  )
}

export { HeaderAuth }
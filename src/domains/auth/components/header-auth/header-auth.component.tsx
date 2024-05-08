
import { ButtonBack } from '@app/shared/components/buttons/button-back/button-back.component';
import { DefaultText } from '@app/shared/components/texts/default-text/default-text.component';

import { Container, Content, Subtitle } from './header-auth.styles';

const HeaderAuth: React.FC = () => {
  return (
    <Container>
      <ButtonBack />
      <Content>
        <DefaultText font='MEDIUM' size='x24'>
          Login
        </DefaultText>

        <Subtitle font='REGULAR' color={200} size='x14'>
        Your dream home is waiting – let's sign you up and embark on this adventure together!
        </Subtitle>
      </Content>
    </Container>
  )
}

export { HeaderAuth }
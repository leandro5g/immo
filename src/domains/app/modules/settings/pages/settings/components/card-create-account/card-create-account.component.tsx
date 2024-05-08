
import { DefaultText } from '@app/shared/components/texts/default-text/default-text.component';
import { Container, Content } from './card-create-account.styles';
import { DefaultButton } from '@app/shared/components/buttons/default-button/default-button.component';

const CardCreateAccount: React.FC = () => {
  return (
    <Container>
      <Content>
        <DefaultText font='SEMI_BOLD' size='x18'>
          Anuncie seu imóvel no Immo
        </DefaultText>

        <DefaultText font='REGULAR' size='x14' color={200}>
          Entre ou cadastre-se e comece a anunciar e gerenciar seus imoveis.
        </DefaultText>
      </Content>

      <DefaultButton textButton='Entrar' />
    </Container>
  )
}

export { CardCreateAccount }
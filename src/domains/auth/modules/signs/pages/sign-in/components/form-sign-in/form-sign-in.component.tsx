
import { DefaultInput } from '@app/shared/components/forms/default-input/default-input.component';

import { Container } from './form-sign-in.styles';

const FormSignIn: React.FC = () => {
  return (
    <Container>
        <DefaultInput 
          icon='EnvelopeSimple' 
          label='Email' 
          name='email'
          placeholder='Digite seu e-mail'
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          />

        <DefaultInput 
          icon='Lock' 
          label='Senha' 
          name='password'
          placeholder='Digite sua senha'
          pass
          keyboardType='ascii-capable'
          autoCapitalize='none'
          autoCorrect={false}
          />
    </Container>
  )
}

export { FormSignIn }
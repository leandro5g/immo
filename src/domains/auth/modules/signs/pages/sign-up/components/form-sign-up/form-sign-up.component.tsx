import { DefaultInput } from '@app/shared/components/forms/default-input/default-input.component';
import { Container } from './form-sign-up.styles';

const FormSignUp: React.FC = () => {
  return (
    <Container>

      <DefaultInput 
          icon='User' 
          label='Nome' 
          name='name'
          placeholder='Digite seu nome completo'
          keyboardType='ascii-capable'
          autoCapitalize='none'
          autoCorrect={false}
          />

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
          icon='Card' 
          label='Email' 
          name='email'
          placeholder='Digite seu e-mail'
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          />


    </Container>
  )
}

export { FormSignUp }
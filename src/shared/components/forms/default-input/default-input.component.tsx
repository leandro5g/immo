import { IconPhosphor } from '../../libs/phosphor-icons/phosphor-icons.component';

import { 
  Container, 
  ContainerInput, 
  ContentIcon, 
  Input, 
  LabelInput 
} from './default-input.styles';

const DefaultInput: React.FC = () => {
  return (
    <Container>
      <LabelInput font='MEDIUM' size='x14'>
        Username or Email
      </LabelInput>

      <ContainerInput>
        <ContentIcon>
          <IconPhosphor icon='Lock' />
        </ContentIcon>

        <Input placeholder='Enter your username or email'/>
      </ContainerInput>
    </Container>
  )
}

export { DefaultInput }
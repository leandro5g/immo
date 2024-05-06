import { ButtonVoid } from 'app/shared/components/buttons/button-void/button-void.component';
import styled from 'styled-components/native';

export const Container = styled(ButtonVoid)`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.NEUTRAL[200]}
`;

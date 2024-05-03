import { DefaultText } from 'app/shared/components/texts/default-text/default-text.component';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleHeader = styled(DefaultText)`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.BOLD};
  color: ${({ theme }) => theme.COLORS.BRAND[100]};
`;
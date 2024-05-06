import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.DEFAULT.WHITE};
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.NEUTRAL[200]}
`;


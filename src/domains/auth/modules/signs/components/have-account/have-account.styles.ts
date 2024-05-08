import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: center;
  margin-top: ${({ theme }) => theme.METRICS.MARGIN.x8}px;
`;

import { ViewAnimated } from '@app/shared/components/libs/animated-component/animated-component.component';
import { RFValue } from '@app/shared/libs/fontSize/fontSize';
import styled from 'styled-components/native';

const SIZE_FOCUS = RFValue(50)

export const Container = styled(ViewAnimated)`
  flex: 1;
  width: ${SIZE_FOCUS}PX;
  height: ${SIZE_FOCUS}PX;
  border-radius: ${SIZE_FOCUS/2}px;
  position: absolute;
  background-color: ${({ theme }) => theme.COLORS.BRAND[100]}
`;

import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled(LinearGradient).attrs({
  colors: ['#8140D8', '#4A1592'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
})`
  flex: 1;
  padding-top: ${30 + getStatusBarHeight(true)}px;
`;

export const ContainerContent = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

export const ContainerText = styled.Text`
  color: #fff;
  font-size: 18px;
  padding: 30px;
`;

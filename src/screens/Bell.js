import React, { useState } from 'react';
import { Animated, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { Container } from '../components';

const Bell = () => {
  const [translateValue] = useState(new Animated.Value(0));
  const { width } = Dimensions.get('window');
  const tabWidth = width / 5;
  const height = 64;

  const drawTab = `M16 32 
    L48 32
    L47.875 15.875
    Q44 16 40 22
    C36 28 28 28 24 22
    Q20 16 16 16
    Z`;

  return (
    <Container>
      <Animated.View>
        <Svg>
          <Path scale={3.5} fill="white" d={drawTab} />
        </Svg>
      </Animated.View>
    </Container>
  );
};
export default Bell;

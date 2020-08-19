import React, { useState } from 'react';
import {
  Animated,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { Icon } from './Icon';

const selectIcon = (route, color = '#fff', size = 30) => {
  let iconName;
  switch (route.name) {
    case 'Bell':
      iconName = 'bell';
      break;
    case 'Chat':
      iconName = 'chat';
      break;
    case 'Radar':
      iconName = 'earth';
      break;
    case 'Settings':
      iconName = 'dots-horizontal';
      break;
    case 'Match':
      return <Text style={styles.tabCirculeContent}>36</Text>;
    default:
      iconName = 'circle';
      break;
  }
  return (
    <Text style={styles.tabCirculeContent}>
      <Icon name={iconName} size={size} color={color} />
    </Text>
  );
};

const MountedTab = ({ active }) => (
  <View style={styles.tabCurvesArea}>
    <View style={styles.tabCurvesBottom} />
    <View style={styles.tabCurvesLeft} />
    <View style={styles.tabCurvesCenter} />
    <View style={styles.tabCurvesRight} />
    <View style={styles.tabCircule}>{active}</View>
  </View>
);

export const TabBarCurves = ({ state, descriptors, navigation }) => {
  const totalWidth = Dimensions.get('window').width;
  const tabWidth = totalWidth / state.routes.length;
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const routeInitial = selectIcon(state.routes[state.index], '#5affd7');
  const [activeTab, setActiveTab] = useState(routeInitial);
  const [translateValue] = useState(new Animated.Value(0));
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return <></>;
  // return (
  //   <View style={[styles.tabContainer, { width: totalWidth }]}>
  //     <Animated.View
  //       style={[
  //         styles.tabSlider,
  //         {
  //           transform: [{ translateX: translateValue }],
  //           width: tabWidth,
  //         },
  //       ]}>
  //       <MountedTab active={activeTab} />
  //     </Animated.View>
  //     {state.routes.map((route, index) => {
  //       const { options } = descriptors[route.key];
  //       const isFocused = state.index === index;
  //       const onLongPress = () => {
  //         navigation.emit({
  //           type: 'tabLongPress',
  //           target: route.key,
  //         });
  //       };
  //       const onPress = () => {
  //         const event = navigation.emit({
  //           type: 'tabPress',
  //           target: route.key,
  //           canPreventDefault: true,
  //         });
  //         if (!isFocused && !event.defaultPrevented) {
  //           navigation.navigate(route.name);
  //         }
  //         Animated.spring(translateValue, {
  //           toValue: index * tabWidth,
  //           velocity: 10,
  //           useNativeDriver: true,
  //         }).start();
  //         setActiveTab(selectIcon(route, '#5affd7'));
  //       };
  //       return (
  //         <TouchableOpacity
  //           key={index}
  //           accessibilityRole="button"
  //           accessibilityStates={isFocused ? ['selected'] : []}
  //           accessibilityLabel={options.tabBarAccessibilityLabel}
  //           testID={options.tabBarTestID}
  //           onPress={onPress}
  //           onLongPress={onLongPress}
  //           style={[styles.tabTouchable, { width: tabWidth }]}>
  //           {!isFocused ? selectIcon(route) : null}
  //         </TouchableOpacity>
  //       );
  //     })}
  //   </View>
  // );
};

const styles = StyleSheet.create({
  tabContainer: {
    alignItems: 'center',
    backgroundColor: '#2B1548',
    flexDirection: 'row',
    height: 64,
    justifyContent: 'center',
  },
  tabSlider: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  tabTouchable: {
    height: 64,
    borderColor: 'red',
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabCurvesArea: {
    width: 120,
    height: 64,
    backgroundColor: '#4a1592',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: '50%',
    marginLeft: -60,
  },
  tabCurvesLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: '#2b1548',
    height: 40,
    width: 25,
    borderTopRightRadius: 100,
  },
  tabCurvesRight: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: '#2b1548',
    height: 40,
    width: 25,
    borderTopLeftRadius: 100,
  },
  tabCurvesCenter: {
    position: 'absolute',
    right: 'auto',
    bottom: 15,
    backgroundColor: '#4a1592',
    height: 40,
    width: 70,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
  },
  tabCurvesBottom: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#2b1548',
    height: 40,
    width: '100%',
  },
  tabCircule: {
    backgroundColor: '#2b1548',
    width: 50,
    height: 50,
    borderRadius: 100,
    marginBottom: 40,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabCirculeContent: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
});

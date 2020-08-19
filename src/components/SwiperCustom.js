import React, { useState } from 'react';
import Swiper from 'react-native-deck-swiper';
import { PaperMatch, ProfileSwipe, ProfileButtons } from './';
import Ionicon from 'react-native-vector-icons/Ionicons';

console.disableYellowBox = true; // Just to isolate warnings (react-native-deck-swiper)

const Match = ({ card }) => <ProfileSwipe card={card} />;

const Like = () => (
  <PaperMatch>
    <Ionicon name="checkmark-circle" size={150} color="#1FB893" />
  </PaperMatch>
);

const DisLike = () => (
  <PaperMatch>
    <Ionicon name="close-circle" size={150} color="#F23870" />
  </PaperMatch>
);

export const SwiperCustom = ({ data, setNice }) => {
  const [index, setIndex] = useState(0);
  const dragEnds = () => setNice(true);
  const onSwiped = () => setIndex(index + 1);
  return (
    <>
      <Swiper
        cards={data}
        cardIndex={index}
        renderCard={(card) => <Match card={card} />}
        onSwiper={onSwiped}
        dragEnd={dragEnds}
        backgroundColor="transparent"
        marginTop={40}
        marginBottom={40}
        cardHorizontalMargin={0}
        stackSize={2}
        stackScala={10}
        stackSeparation={10}
        disableTopSwipe
        disableBottomSwipe
        animateOverlayLabelsOpacity
        animateCardOpacity
        overlayLabels={{
          right: {
            element: <Like />,
          },
          left: {
            element: <DisLike />,
          },
        }}
      />
      <ProfileButtons />
    </>
  );
};

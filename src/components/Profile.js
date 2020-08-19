import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Card = styled.View`
  flex: 1;
  background: #fff;
  border-radius: 50px;
  border: #ccc 1px solid;
`;
/*
--------------------------------------------------------------------------------
Header
--------------------------------------------------------------------------------
*/
const Header = styled.View`
  padding: 10px 0 10px 25px;
  border: 0px solid black;
`;

const AvatarGroup = styled.View`
  height: 70px;
  width: 60px;
`;

const AvatarGradient = styled(LinearGradient).attrs({
  colors: ['#6BF4F9', '#5AFFDB'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
})`
  position: absolute;
  top: 5px;
  border-radius: 100px;
  height: 60px;
  width: 60px;
`;

const AvatarImage = styled.Image`
  position: absolute;
  top: 5px;
  left: 5px;
  width: 50px;
  height: 50px;
  border-radius: 100px;
`;

const AvatarStarOne = styled(Icon).attrs({
  name: 'star',
  size: 15,
  color: '#5AFFD7',
})`
  position: absolute;
  top: 0px;
`;

const AvatarStarTwo = styled(Icon).attrs({
  name: 'star',
  size: 15,
  color: '#5AFFD7',
})`
  position: absolute;
  top: 3px;
  right: 0px;
`;

const AvatarStarThree = styled(Icon).attrs({
  name: 'star',
  size: 15,
  color: '#5AFFD7',
})`
  position: absolute;
  bottom: 3px;
  left: 0px;
`;

const AvatarStarFour = styled(Icon).attrs({
  name: 'star',
  size: 15,
  color: '#5AFFD7',
})`
  position: absolute;
  bottom: 0px;
  right: 0px;
`;

const Title = styled.Text`
  position: absolute;
  top: 27px;
  left: 95px;
  font-size: 16px;
  font-weight: bold;
  color: #3a2a4f;
`;

const SubTitleOne = styled.Text`
  position: absolute;
  top: 46px;
  left: 95px;
  font-size: 12px;
  color: #8140d8;
`;

const SubTitleTwo = styled.Text`
  position: absolute;
  top: 46px;
  left: 180px;
  font-size: 12px;
  color: #8140d8;
`;

const ButtomHeaderLike = styled(Ionicon).attrs({
  name: 'checkmark-circle',
  size: 55,
  color: '#1FB893',
})`
  position: absolute;
  top: 10px;
  right: 20px;
`;

const ButtomHeaderDisLike = styled(Ionicon).attrs({
  name: 'close-circle',
  size: 55,
  color: '#F23870',
})`
  position: absolute;
  top: -20px;
  right: 20px;
`;

/*
--------------------------------------------------------------------------------
Body
--------------------------------------------------------------------------------
*/
const CardBoby = styled.View`
  flex: 1;
  background-color: #fbfbfb;
  border-top-color: #ddd;
  border-top-width: 1px;
  border-bottom-color: #ddd;
  border-bottom-width: 1px;
  padding: 20px 25px;
`;

const CardBobyTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #3a2a4f;
  margin-bottom: 20px;
`;

const CardBadgeGroup = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;

const CardBadgePurple = styled.View`
  flex-direction: row;
  border-radius: 3px;
  background-color: #8140d8;
  padding: 4px 10px;
  margin-right: 5px;
`;

const CardBadgeDark = styled.View`
  flex-direction: row;
  border-radius: 3px;
  background-color: #3a2a4f;
  padding: 4px 10px;
  margin-right: 5px;
`;

const CardBadgeWhite = styled.View`
  flex-direction: row;
  border-radius: 3px;
  border: #3a2a4f 2px solid;
  padding: 2px 10px;
  width: auto;
  margin-right: 10px;
`;

const CardBadgeStar = styled(Ionicon).attrs({
  name: 'star',
  size: 12,
  color: '#5AFFD7',
})`
  padding-right: 6px;
`;

const CardBadgeText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #5affd7;
`;

const CardBadgeTextDark = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #3a2a4f;
`;

const LineHorizontal = styled.View`
  flex: 1;
  border-top-color: #ddd;
  border-top-width: 1px;
  margin: 40px 0 0 0;
`;

/*
--------------------------------------------------------------------------------
Footer
--------------------------------------------------------------------------------
*/
const CardFooter = styled.View`
  height: 180px;
  padding: 20px 25px;
`;

const FooterTextOne = styled.Text`
  font-size: 22px;
  color: #3a2a4f;
`;

const FooterLink = styled.Text`
  align-self: center;
  font-size: 22px;
  color: #8140d8;
  text-decoration: underline;
  margin-top: 15px;
`;

const ButtomFooterFind = styled(Ionicon).attrs({
  name: 'search',
  size: 35,
  color: '#8140d8',
})`
  margin: auto;
`;

const ButtomFooterFindBg = styled.View`
  position: absolute;
  bottom: 15px;
  right: 25px;
  height: 55;
  width: 55;
  background-color: #5affd7;
  border-radius: 100;
`;

const ButtomFooterAdd = styled(AntDesign).attrs({
  name: 'plus',
  size: 35,
  color: '#8140D8',
})`
  margin: auto;
`;

const ButtomFooterAddBg = styled.View`
  position: absolute;
  bottom: 15px;
  left: 25px;
  height: 55;
  width: 55;
  border: 3px solid #8140d8;
  background-color: #ffffff;
  border-radius: 100;
`;

export const ProfileButtons = () => (
  <>
    <ButtomFooterAddBg>
      <ButtomFooterAdd />
    </ButtomFooterAddBg>

    <ButtomFooterFindBg>
      <ButtomFooterFind />
    </ButtomFooterFindBg>
  </>
);

export const ProfileSwipe = ({ card }) => (
  <Card>
    <Header>
      <AvatarGroup>
        <AvatarStarOne />
        <AvatarStarTwo />
        <AvatarStarThree />
        <AvatarStarFour />
        <AvatarGradient>
          <AvatarImage source={{ uri: card.picture.large }} />
        </AvatarGradient>
      </AvatarGroup>
      <Title>Lorem ipsum dolor</Title>
      <SubTitleOne>
        <Icon name="gamepad-circle" size={12} color="#8140D8" /> Lorem ipsum
      </SubTitleOne>
      <SubTitleTwo>
        <Icon name="map-marker" size={12} color="#8140D8" /> 10 Km
      </SubTitleTwo>
      <ButtomHeaderLike />
    </Header>

    <CardBoby>
      <ButtomHeaderDisLike />
      <CardBobyTitle>Lorem ipsum</CardBobyTitle>

      <CardBadgeGroup>
        <CardBadgePurple>
          <CardBadgeStar />
          <CardBadgeText>Lorem ipsum</CardBadgeText>
        </CardBadgePurple>

        <CardBadgePurple>
          <CardBadgeStar />
          <CardBadgeText>Lorem ipsum dolor</CardBadgeText>
        </CardBadgePurple>

        <CardBadgePurple>
          <CardBadgeStar />
          <CardBadgeText>Lorem ipsum</CardBadgeText>
        </CardBadgePurple>
      </CardBadgeGroup>

      <CardBadgeGroup>
        <CardBadgeDark>
          <CardBadgeText>Lorem ipsum</CardBadgeText>
        </CardBadgeDark>

        <CardBadgeWhite>
          <CardBadgeTextDark>Lorem</CardBadgeTextDark>
        </CardBadgeWhite>

        <CardBadgeWhite>
          <CardBadgeTextDark>+16 Lorem ipsum</CardBadgeTextDark>
        </CardBadgeWhite>
      </CardBadgeGroup>

      <LineHorizontal />

      <CardBobyTitle>Lorem ipsum</CardBobyTitle>

      <CardBadgeGroup>
        <CardBadgePurple>
          <CardBadgeStar />
          <CardBadgeText>Lorem ipsum</CardBadgeText>
        </CardBadgePurple>

        <CardBadgeDark>
          <CardBadgeText>Lorem ipsum</CardBadgeText>
        </CardBadgeDark>

        <CardBadgeWhite>
          <CardBadgeTextDark>Lorem</CardBadgeTextDark>
        </CardBadgeWhite>

        <CardBadgeWhite>
          <CardBadgeTextDark>+8 Lorem ipsum</CardBadgeTextDark>
        </CardBadgeWhite>
      </CardBadgeGroup>
    </CardBoby>

    <CardFooter>
      <CardBobyTitle>Lorem ipsum</CardBobyTitle>
      <FooterTextOne>
        Lorem ipsum dolor sit amet, dolor sit lorem ipsum.
      </FooterTextOne>
      <FooterLink> Lorem ipsum</FooterLink>
    </CardFooter>
  </Card>
);

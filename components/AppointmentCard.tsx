import React, { ReactElement } from "react";
import { View, Image } from "react-native";
import styled from "styled-components/native";

interface Props {
  month: string;
  day: string;
  time: string;
  name: string;
  image: string;
}

const AppointmentCardView = styled.View`
  box-shadow: 2px 2px 20px #0001;
  border-radius: 5px;
  margin: 25px 0 0 0;
  padding: 20px;
  align-items: center;
  flex-direction: row;
  min-height: 75px;
  max-height: 75px;
`;

const AppointmentCardLeft = styled.View`
  padding-right: 30px;
  justify-content: center;
`;

const AppointmentCardRight = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const AppointmentCardMonth = styled.Text`
  font-size: 16;
  font-weight: bold;
  color: #39767a;
`;

const AppointmentCardDay = styled.Text`
  font-size: 28;
  font-weight: bold;
`;

const AppointmentCardName = styled.Text`
  font-size: 18;
  font-weight: bold;
`;

const AppointmentCardTime = styled.Text`
  font-size: 14;
`;

const AppointmentCardImage = styled.Image`
  width: 50;
  height: 50;
  border-radius: 50%;
`;

export default function AppointmentCard({
  month,
  day,
  time,
  name,
  image,
}: Props): ReactElement {
  return (
    <AppointmentCardView>
      <AppointmentCardLeft style={{ borderRight: "1px solid #0003" }}>
        <AppointmentCardMonth>{month}</AppointmentCardMonth>
        <AppointmentCardDay>{day}</AppointmentCardDay>
      </AppointmentCardLeft>
      <AppointmentCardRight>
        <View style={{ marginLeft: 20 }}>
          <AppointmentCardName>{name}</AppointmentCardName>
          <AppointmentCardTime>{time}</AppointmentCardTime>
        </View>
        <AppointmentCardImage source={image} />
      </AppointmentCardRight>
    </AppointmentCardView>
  );
}

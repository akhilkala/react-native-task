import React, { ReactElement } from "react";
import styled from "styled-components/native";
import { Image, View } from "react-native";

interface Props {
  time: string;
  frequency: string;
  name: string;
  amountInGrams: number;
  quantityLeftInDays: number;
  fillsLeft: number;
  image: string;
}

const MedicationCardView = styled.View`
  box-shadow: 2px 2px 20px #0001;
  border-radius: 5px;
  margin: 25px 25px 25px 0;
  width: 240px;
  flex: 1;
`;

const Header = styled.View`
  background: #f2907aaa;
  flex: 1.5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  justify-content: center;
  padding: 0 20px;
`;

const Main = styled.View`
  flex: 3;
`;

const Heading = styled.Text`
  color: #fff;
  font-size: 32;
  font-weight: bold;
`;

const SubHeading = styled.Text`
  color: #fffc;
  font-size: 18;
  font-weight: bold;
`;

const CardHeading = styled.Text`
  color: #212121;
  font-size: 20;
  font-weight: bold;
  padding: 15px;
`;

const MedicationCardImage = styled.Image`
  width: 30;
  height: 27;
  margin: 15px 0 0 20px;
`;

const MedicationTileInformation = styled.View`
  margin: 0 15px;
`;

const MedicationTileInformationHeading = styled.View`
  font-weight: bold;
  opacity: 0.6;
`;

const MedicationTileInformationValue = styled.View`
  font-weight: bold;
  margin-top: 5px;
`;

const MedicationCardButton = styled.TouchableOpacity`
  margin: 15px;
  font-weight: bold;
  font-family: sans-serif;
  justify-content: center;
  align-items: center;
  border: 1px solid #0003;
  color: #39767a;
  padding: 7px;
  border-radius: 30px;
`;

export default function MedicationCard({
  name,
  time,
  frequency,
  amountInGrams,
  quantityLeftInDays,
  fillsLeft,
  image,
}: Props): ReactElement {
  return (
    <MedicationCardView>
      <Header>
        <Heading>{time}</Heading>
        <SubHeading>{frequency}</SubHeading>
      </Header>
      <Main>
        <MedicationCardImage source={image} />
        <CardHeading>
          {name} ({amountInGrams}mg)
        </CardHeading>
        <View style={{ flexDirection: "row" }}>
          <MedicationTileInformation>
            <MedicationTileInformationHeading>
              Qty
            </MedicationTileInformationHeading>
            <MedicationTileInformationValue>
              {quantityLeftInDays} days
            </MedicationTileInformationValue>
          </MedicationTileInformation>
          <MedicationTileInformation>
            <MedicationTileInformationHeading>
              Fills
            </MedicationTileInformationHeading>
            <MedicationTileInformationValue>
              {fillsLeft} left
            </MedicationTileInformationValue>
          </MedicationTileInformation>
        </View>
        <MedicationCardButton>Mark as Taken</MedicationCardButton>
      </Main>
    </MedicationCardView>
  );
}

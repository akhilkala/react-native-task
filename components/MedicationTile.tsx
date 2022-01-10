import React, { ReactElement } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  frequency: string;
  name: string;
  amountInGrams: number;
  quantityLeftInDays: number;
  fillsLeft: number;
  rx: number;
  directions: string;
  prescribedBy: string;
  image: string;
}

const MedicationTileView = styled.View`
  flex-direction: row;
  padding: 25px;
`;

const MedicationTileImage = styled.Image`
  width: 25px;
  height: 24px;
  margin-right: 20px;
`;

const MedicationTileHeading = styled.Text`
  font-size: 20;
  font-weight: bold;
`;

const MedicationTileDirections = styled.Text`
  width: 60%;
  margin-top: 15px;
`;

const MedicationTileInformation = styled.View`
  margin-top: 15px;
  margin-right: 25px;
`;

const MedicationTileInformationHeading = styled.View`
  font-weight: bold;
  opacity: 0.6;
`;

const MedicationTileInformationValue = styled.View`
  font-weight: bold;
  margin-top: 5px;
`;

const MedicationTileFrequency = styled.View`
  font-weight: bold;
  color: #0008;
  margin-top: 15px;
  background: #ccc;
  width: max-content;
  padding: 5px 10px;
  border-radius: 7px;
  flex-direction: row;
  align-items: center;
`;

export default function MedicationTile({
  frequency,
  name,
  amountInGrams,
  quantityLeftInDays,
  fillsLeft,
  rx,
  directions,
  prescribedBy,
  image,
}: Props): ReactElement {
  return (
    <MedicationTileView style={{ borderBottom: "1px solid #0003" }}>
      <MedicationTileImage source={image} />
      <View>
        <MedicationTileHeading>
          {name} ({amountInGrams}mg)
        </MedicationTileHeading>
        <MedicationTileDirections>
          Directions: {directions}. Prescribed by {prescribedBy}
        </MedicationTileDirections>
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
          <MedicationTileInformation>
            <MedicationTileInformationHeading>
              RX
            </MedicationTileInformationHeading>
            <MedicationTileInformationValue>
              {rx}
            </MedicationTileInformationValue>
          </MedicationTileInformation>
        </View>
        <MedicationTileFrequency>
          <AntDesign
            style={{ marginRight: "8px" }}
            color="#0008"
            name="clockcircle"
            size={16}
          />{" "}
          {frequency}
        </MedicationTileFrequency>
      </View>
    </MedicationTileView>
  );
}

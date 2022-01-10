import React, { ReactElement } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import AppointmentCard from "../components/AppointmentCard";
import MedicationCard from "../components/MedicationCard";
import Page from "../components/Page";
import data from "../data";

interface Props {}

const Heading2 = styled.Text`
  color: #212121;
  font-size: 22;
  font-weight: bold;
`;

const MedicationView = styled.View`
  flex: 3;
`;

const AppointmentView = styled.View`
  flex: 1;
`;

const Body = styled.View`
  flex: 3.5;
  padding: 30px;
`;

export default function Home({}: Props): ReactElement {
  return (
    <Page heading="Good Morning!" subHeading="Thursday, April 15th.">
      <Body>
        <MedicationView>
          <Heading2>Today's Medication</Heading2>
          <FlatList
            data={data.todaysMedication}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <MedicationCard {...item} />}
          />
          {/* <MedicationCard /> */}
        </MedicationView>
        <AppointmentView>
          <Heading2>Next Appointment</Heading2>
          <AppointmentCard {...data.appointments[0]} />
        </AppointmentView>
      </Body>
    </Page>
  );
}

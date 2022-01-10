import React, { ReactElement } from "react";
import { FlatList, View } from "react-native";
import styled from "styled-components/native";
import AppointmentCard from "../components/AppointmentCard";
import Page from "../components/Page";
import data from "../data";

interface Props {}

const Body = styled.View`
  flex: 3.5;
  padding: 10px 30px;
`;

export default function Appointments({}: Props): ReactElement {
  return (
    <Page heading="Appointments" subHeading="Your upcoming appointments.">
      <Body>
        <FlatList
          data={data.appointments}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <AppointmentCard {...item} />}
        />
      </Body>
    </Page>
  );
}

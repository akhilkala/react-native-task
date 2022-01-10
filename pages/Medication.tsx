import React, { ReactElement } from "react";
import { FlatList, View } from "react-native";
import MedicationTile from "../components/MedicationTile";
import Page from "../components/Page";
import data from "../data";

interface Props {}

export default function Medication({}: Props): ReactElement {
  return (
    <Page heading="Medication" subHeading="Current prescribed medication.">
      <FlatList
        data={data.medication}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <MedicationTile {...item} />}
      />
    </Page>
  );
}

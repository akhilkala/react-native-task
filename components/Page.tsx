import React, { ReactElement } from "react";
import styled from "styled-components/native";

interface Props {
  heading: string;
  subHeading: string;
  children: ReactElement | ReactElement[];
}

const PageView = styled.View`
  flex: 1;
`;

const Header = styled.View`
  background: #39767a;
  flex: 1;
  padding: 25px;
  justify-content: flex-end;
`;

const Heading = styled.Text`
  color: #fff;
  font-size: 36;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SubHeading = styled.Text`
  color: #fff9;
  font-size: 19;
  margin-bottom: 10px;
`;

const Body = styled.View`
  flex: 3.5;
`;

export default function Page({
  heading,
  subHeading,
  children,
}: Props): ReactElement {
  return (
    <PageView>
      <Header>
        <Heading>{heading}</Heading>
        <SubHeading>{subHeading}</SubHeading>
      </Header>
      <Body>{children}</Body>
    </PageView>
  );
}

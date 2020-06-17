import React from "react";
import { Page } from "../Components/Page";
import { Button } from "../Components/Button";
import {
  PageTitle,
  Panel,
  PanelTitle,
  PanelText,
  Link,
  ButtonWrapper,
} from "./elements";

export const Home: React.FC<{
  title: string;
  time?: Date;
}> = ({ title }) => {
  return (
    <Page>
      <PageTitle>¿Cuándo es el Live?</PageTitle>
      <Panel>
        <PanelTitle>Ya empieza!!</PanelTitle>
        <PanelText>{title}</PanelText>
        <Link href="https://noders.live">https://noders.live</Link>
      </Panel>
      <ButtonWrapper>
        <Button>Mas eventos</Button>
      </ButtonWrapper>
    </Page>
  );
};

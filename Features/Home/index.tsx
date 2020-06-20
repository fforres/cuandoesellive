import React from "react";
import { Button } from "../../Components/Button";
import {
  PageTitle,
  Panel,
  PanelTitle,
  PanelText,
  Link,
  ButtonWrapper,
} from "./elements";
import { ModalCalendar, ModalContainer } from "../../Components/Modal";

const Title: React.FC<{
  time?: Date;
}> = () => {
  return <PanelTitle>Ya empieza!!</PanelTitle>;
};

export const Home: React.FC<{
  title: string;
  time?: Date;
}> = ({ title, time }) => {
  return (
    <>
      <PageTitle>¿Cuándo es el Live?</PageTitle>
      
        <Panel>
          <Title time={time} />
          <PanelText>{title}</PanelText>
          <Link href="https://noders.live">https://noders.live</Link>
        </Panel>
      <ButtonWrapper>
        <Button>Mas eventos</Button>
      </ButtonWrapper>
      <ModalContainer>
        <div style={{width:'100%', height:'400px', border:'2px solid black'}}>
        </div>
        <ModalCalendar/>
      </ModalContainer>
    </>
  );
};

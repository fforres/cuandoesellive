import styled from "styled-components";
import {
  TitleSmall,
  Title,
  BodyTextLarge,
  BodyText,
} from "../../Components/Typography";
import { Theme } from "../../styles/theme";

export const PageTitle = styled.h1`
  ${TitleSmall}
  margin-bottom: 64px;
`;

export const Panel = styled.section`
  position: relative;
  align-items: flex-start;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  width: 100%;
  max-width: 1024px;
  flex-direction: column;
  margin-bottom: 64px;
  padding: 64px;
  ${Theme.shadows.panel.default}

  ${Theme.breakPoints.tabletLandscape} {
    padding: 48px;
    margin-bottom: 48px;
  }

  ${Theme.breakPoints.phone} {
    padding: 0;
    margin-bottom: 32px;
    ${Theme.shadows.panel.none}
  }
`;

export const PanelTitle = styled.h2`
  ${Title}
  margin-bottom: 32px;
  ${Theme.breakPoints.phone} {
    margin-bottom: 32px;
  }
`;

export const PanelText = styled.b`
  ${BodyTextLarge}
  margin-bottom: 32px;
  ${Theme.breakPoints.phone} {
    margin-bottom: 32px;
  }
`;

export const Link = styled.a`
  ${BodyText}
  font-weight: bold;
  text-decoration: none;
  color: ${Theme.colors.nodersGreen};
  &:visited {
    color: ${Theme.colors.nodersGreen};
  }
`;

export const ButtonWrapper = styled.div`
  margin-bottom: 32px;
`;

import styled from "styled-components";
import { Theme } from "../../styles/theme";

export const Page = styled.div`
  height: 100%;
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 64px;
  padding-top: 150px;
  ${Theme.breakPoints.desktop} {
    padding: 64px;
    padding-top: 100px;
  }
  ${Theme.breakPoints.tabletLandscape} {
    padding: 32px;
    padding-top: 80px;
  }
  ${Theme.breakPoints.phone} {
    padding: 16px;
    padding-top: 60px;
  }
`;
9;

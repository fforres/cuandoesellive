import styled from "styled-components";
import { Theme } from "../../styles/theme";

export const Page = styled.div`
  padding: 64px;
  ${Theme.breakPoints.tabletLandscape} {
    padding: 32px;
  }
  ${Theme.breakPoints.phone} {
    padding: 16px;
  }
`;

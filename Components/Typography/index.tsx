import { css } from "styled-components";
import { Theme } from "../../styles/theme";

const fontAnimations = css`
  transition: font-size ${Theme.animations.fast} ease-in-out;
`;

export const Title = css`
  ${fontAnimations}
  font-size: 70px;
  ${Theme.breakPoints.tabletLandscape} {
    font-size: 60px;
  }
  ${Theme.breakPoints.phone} {
    font-size: 50px;
  }
  font-weight: bold;
`;

export const TitleSmall = css`
  ${fontAnimations}
  font-size: 40px;
  ${Theme.breakPoints.tabletLandscape} {
    font-size: 35px;
  }
  ${Theme.breakPoints.phone} {
    font-size: 25px;
  }
  font-weight: bold;
`;

export const BodyTextLarge = css`
  ${fontAnimations}
  font-size: 30px;
  ${Theme.breakPoints.tabletLandscape} {
    font-size: 25px;
  }
  ${Theme.breakPoints.phone} {
    font-size: 20px;
  }
`;

export const BodyText = css`
  ${fontAnimations}
  font-size: 20px;
`;

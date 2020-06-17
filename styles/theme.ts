import { css } from "styled-components";

export const ViewportSizes = {
  Phone: 576,
  TabletPortrait: 768,
  TabletLandscape: 992,
  Desktop: 1200,
} as const;

export const Theme = {
  colors: {
    purpleBase: "#9378ff",
    purple200: "#9E83FF",
    purple500: "#7660DE",
    nodersGreen: "#69D400",
  },
  shadows: {
    active: css`
      box-shadow: 0px 0px 8px rgba(135, 206, 250, 0.75);
    `,
    panel: {
      default: css`
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
      `,
      none: css`
        box-shadow: none;
      `,
    },
  },
  breakPoints: {
    tabletPortrait: `@media (max-width: ${ViewportSizes.TabletPortrait}px)`,
    tabletLandscape: `@media (max-width: ${ViewportSizes.TabletLandscape}px)`,
    phone: `@media (max-width: ${ViewportSizes.Phone}px)`,
    desktop: `@media (max-width: ${ViewportSizes.Desktop}px)`,
  },
  animations: {
    fast: "150ms",
  },
};

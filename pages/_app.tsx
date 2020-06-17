import React from "react";
import App from "next/app";
import { GlobalReset, GlobalFonts, GlobalStyle } from "../styles";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalReset />
        <GlobalFonts />
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}

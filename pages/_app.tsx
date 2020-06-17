import React from "react";
import App from "next/app";
import { GlobalStyleReset } from "../styles/reset";
import { GlobalStyleFonts } from "../styles/fonts";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyleReset />
        <GlobalStyleFonts />
        <Component {...pageProps} />
      </>
    );
  }
}

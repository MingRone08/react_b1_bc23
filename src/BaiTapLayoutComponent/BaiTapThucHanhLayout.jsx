import React, { Component } from "react";
import LayoutBanner from "./LayoutBanner";
import LayoutFooter from "./LayoutFooter";
import LayoutHeader from "./LayoutHeader";
import LayoutItem from "./LayoutItem";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <LayoutHeader/>
        <LayoutBanner/>
        <LayoutItem/>
        <LayoutFooter/>
      </div>
    );
  }
}

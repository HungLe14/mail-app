import React from "react";
import { TabsStyle } from "./TabsStyle";

export const Tabs = ({ children }) => {
  return (
    <TabsStyle>
      <a href="#">{children}</a>
    </TabsStyle>
  );
};

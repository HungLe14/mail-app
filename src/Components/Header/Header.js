import React from "react";
import { BtnStyle } from "../Button/BtnStyle";
import { DropDown } from "../DropDown/DropDown";
import { Tabs } from "../Tabs/Tabs";
import { HeaderStyle, FlexDisplay } from "./HeaderStyle";

export const Header = () => {
  return (
    <FlexDisplay>
      <HeaderStyle>
        <Tabs>Messages</Tabs>
        <Tabs>Contacts</Tabs>
        <Tabs>Preferences</Tabs>
      </HeaderStyle>
      <HeaderStyle>
        <DropDown></DropDown>
        <BtnStyle>Home</BtnStyle>
        <BtnStyle>New Messages</BtnStyle>
      </HeaderStyle>
    </FlexDisplay>
  );
};

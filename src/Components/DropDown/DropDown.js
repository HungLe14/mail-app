import React from "react";
import { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { accountContext } from "../Main/Main";

export const DropDown = () => {
  const accountCtx = useContext(accountContext);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {accountCtx.account}
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ margin: 0 }}>
        <Dropdown.Item
          href=""
          onClick={(event) => {
            accountCtx.setAccount(event.target.innerText);
          }}
        >
          devguy@angular.dev
        </Dropdown.Item>
        <Dropdown.Item
          href=""
          onClick={(event) => {
            accountCtx.setAccount(event.target.innerText);
          }}
        >
          devgal@angular.dev
        </Dropdown.Item>
        <Dropdown.Item
          href=""
          onClick={(event) => {
            accountCtx.setAccount(event.target.innerText);
          }}
        >
          myself@angular.dev
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

import React, { useState } from "react";
import { useEffect } from "react";
import { Aside } from "../Aside/AsideStyle";
import { Item } from "../Aside/Item";
import { ItemsStyle } from "../Aside/ItemsStyle";
import { EmailTable } from "../Email/Email";
import { EmailWrap } from "../Email/EmailWrap";
import { EmailBody } from "../EmailContent/EmailBody";
import { EmailHeader } from "../EmailContent/EmailContent";
import { Header } from "../Header/Header";

export const accountContext = React.createContext();

const Main = () => {
  const itemArr = [
    "inbox",
    "finance",
    "travel",
    "personal",
    "spam",
    "draft",
    "sent",
  ];
  const dataMessages = require("../../messages.json");
  const [account, setAccount] = useState("devgal@angular.dev");
  const [folder, setFolder] = useState("inbox");
  const [emailSelected, setEmailSelected] = useState("");
  const [emailDisplay, setEmailDisplay] = useState(false);

  const messagesSelectedByEmail = (account, folder) => {
    const arrData = dataMessages.filter((message) => {
      return account === message.to && folder === message.folder;
    });

    return arrData.map((item) => {
      return {
        ...item,
        isRead: false,
      };
    });
  };

  const [data, setData] = useState(
    messagesSelectedByEmail("devgal@angular.dev", "inbox")
  );

  useEffect(() => {
    setData(messagesSelectedByEmail(account, folder));
  }, [folder, account]);

  const changeFolderHandler = (folder) => {
    setFolder(folder);
  };

  const selectedEmail = (id) => {
    const selected = dataMessages.find((email) => email._id === id);
    setEmailSelected(selected);
    setEmailDisplay(true);
  };

  const convertString = (string) => {
    const newString = string.replaceAll("\n", "\n\n");
    return newString;
  };

  return (
    <React.Fragment>
      <accountContext.Provider value={{ account, setAccount }}>
        <Header></Header>
      </accountContext.Provider>
      <EmailWrap>
        <Aside>
          <ItemsStyle>
            {itemArr.map((item) => {
              return (
                <Item
                  onChangeFolder={changeFolderHandler}
                  isActive={folder === item}
                >
                  {item}
                </Item>
              );
            })}
          </ItemsStyle>
        </Aside>
        <EmailTable
          data={data}
          setData={setData}
          onSelectEmail={selectedEmail}
          isActive={emailSelected._id}
        ></EmailTable>
      </EmailWrap>
      {emailDisplay && <EmailHeader emailSelect={emailSelected}></EmailHeader>}
      {emailDisplay && (
        <EmailBody>{convertString(emailSelected.body)}</EmailBody>
      )}
    </React.Fragment>
  );
};
export default Main;

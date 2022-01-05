import styled from "styled-components";
import { convertDate } from "../../Util";

const EmailContentHeader = styled.div`
  width: 100%;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  background-color: #ccc;
  align-content: center;
`;

const ContentHeaderCol1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;

  & h4,
  & h5 {
    margin: 0;
  }
`;

const ContentHeaderCol2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: flex-end;
  align-items: flex-start;
`;

const ContentHeaderLine2 = styled.div`
  display: flex;
  gap: 5px;
  justify-content: flex-start;
`;

const EmailBtn = styled.button`
  background-color: blue;
  color: white;
`;

const monthStr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const EmailHeader = ({ emailSelect }) => {
  const { day, monthIndex, year, hour, minute, second } = convertDate(
    emailSelect.date
  );
  return (
    <EmailContentHeader>
      <ContentHeaderCol1>
        <h4>{emailSelect.subject}</h4>
        <h5>
          {`${emailSelect.from} ${String.fromCharCode(8594)} ${emailSelect.to}`}
        </h5>
      </ContentHeaderCol1>
      <ContentHeaderCol2>
        <div>{`${monthStr[monthIndex]} ${day}, ${year} ${hour}:${minute}:${second}`}</div>
        <ContentHeaderLine2>
          <EmailBtn>Reply</EmailBtn>
          <EmailBtn>Forward</EmailBtn>
          <EmailBtn>Delete</EmailBtn>
        </ContentHeaderLine2>
      </ContentHeaderCol2>
    </EmailContentHeader>
  );
};

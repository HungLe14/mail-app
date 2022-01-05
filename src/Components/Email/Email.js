import styled from "styled-components";
import { convertDate } from "../../Util";

const TableWrap = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 20px;
  overflow: scroll;
  font-size: 14px;
`;

const Table = styled.table`
  width: 100%;
  text-align: left;
`;

const TableRow = styled.tr`
  & .sender {
    width: 30%;
    position: relative;
  }

  & .subject {
    width: 50%;
  }

  & .date {
    width: 20%;
  }

  & .sender:before {
    content: "";
    display: ${(props) => (props.status ? "none" : "block")};
    width: 8px;
    height: 8px;
    background-color: blue;
    border-radius: 50%;
    position: absolute;
    top: 8px;
    left: -15px;
  }
`;

export const EmailTable = ({ data, onSelectEmail, isActive, setData }) => {
  return (
    <TableWrap>
      <Table>
        <thead>
          <TableRow>
            <td className="sender">Sender</td>
            <td className="subject">Subject</td>
            <td className="date">Date</td>
          </TableRow>
        </thead>
        <tbody>
          {data.map((email, index) => {
            const { day, month, year } = convertDate(email.date);
            return (
              <TableRow
                key={index}
                status={email.isRead}
                onClick={() => {
                  data[index].isRead = true;
                  setData([...data]);
                  onSelectEmail(email._id);
                }}
                style={{
                  backgroundColor: isActive === email._id ? "blue" : "",
                  color: isActive === email._id ? "white" : "black",
                }}
              >
                <td className="sender">{email.from}</td>
                <td className="subject">{email.subject}</td>
                <td className="date">{`${year}-${month}-${day}`}</td>
              </TableRow>
            );
          })}
        </tbody>
      </Table>
    </TableWrap>
  );
};

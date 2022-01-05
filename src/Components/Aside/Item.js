import styled from "styled-components";

export const ItemStyle = styled.li`
  width: 100%;

  & a {
    text-decoration: none;
    color: black;
  }
`;
export const Item = ({ children, onChangeFolder, isActive }) => {
  return (
    <ItemStyle style={{ backgroundColor: isActive ? "blue" : "" }}>
      <a
        href="#"
        style={{ color: isActive ? "white" : "black" }}
        onClick={() => {
          onChangeFolder(children);
        }}
      >
        {children}
      </a>
    </ItemStyle>
  );
};

import styled from "styled-components";

export const TabsStyle = styled.div`
  padding: 5px 10px;
  background-color: #ddd;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  & a {
    text-decoration: none;
    color: #111;
  }

  &:hover,
  &:hover a,
  &:active a {
    background-color: #ccc;
  }
`;

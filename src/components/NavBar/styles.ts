import { Link } from "react-router-dom";
import styled from "styled-components";

export const Lista = styled.ul`
  display: flex;
  justify-content: end;

  li {
    margin-right: 16px;
    border: 1px solid black;
    padding: 8px;
    border-radius: 5%;

    &:hover {
      background-color: black;
      transition: 1s;
    }
  }
`

export const Links = styled(Link)`
  text-decoration: none;
      color: red
`

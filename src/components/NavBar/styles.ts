import { Link } from "react-router-dom";
import styled from "styled-components";

export const Lista = styled.ul`
  display: flex;
  justify-content: end;

  li {
    margin-right: 16px;
    padding: 8px;
    border-radius: 8%;

    &:hover {
      background: linear-gradient(to bottom left, #9A17E0, #00BFFF);
      transition: 1s;
    }
  }
`

export const Links = styled(Link)`
  text-decoration: none;
      color: red
`

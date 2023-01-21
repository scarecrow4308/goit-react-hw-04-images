import styled from "styled-components";
import { ReactComponent as SearchIcon } from "./SearchIcon.svg";

export const SearchFormButton = styled.button`
  display: inline-block;
  position: relative;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
  }
`;

export const SearchFormButtonLabel = styled(SearchIcon)`
  position: absolute;
  width: 20px;
  height: 20px;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  border: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

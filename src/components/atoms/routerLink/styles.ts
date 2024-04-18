import styled from "styled-components";
import {Link} from 'react-router-dom';
import {LinkProps} from "./index";
export const StyledCustomLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`

export const StyledListI = styled.li<Pick<LinkProps, "active">>`
  padding: 1rem;
  
  &:hover {
    background-color: var(--grey02);
  }
 
  ${({ active }) => active && `
    background-color: "var(--grey01)";
  `}
`
export const StyledLink = styled(Link)`
    color: var(--black);
    text-decoration: none;
    text-align: center;
    font-family: "DMSans-Regular",serif;
    display: flex;
    gap: 5px;
    
    :hover {
      color: var(--pink);
    }
`
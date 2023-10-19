import styled from 'styled-components';
import { Link } from "react-router-dom";
import {LinkProps} from "./index";


export const StyledNavbar = styled.nav`
    color: white;
    display: flex;
    background-color: var(--grey01);
    justify-content: space-between;
    align-items: stretch;
    gap: 2rem;
    padding: 0 1rem;
`

export const StyledUList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  gap: 1rem;
`

export const StyledAnchor = styled.a`
  color: inherit;
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`

export const StyledTitle = styled(StyledAnchor)`
  font-size: 2rem;
  padding: 1rem;
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
import styled from "styled-components";
import {Link} from 'react-router-dom';

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
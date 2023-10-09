import * as S from "./styles";
import {StyledListI} from "./styles";
import { useMatch, useResolvedPath } from "react-router-dom";

// separera till separata components

export interface LinkProps {
    to: string,
    children: string,
    active?: any,
}

const CustomLink = ({to, children, ...props} : LinkProps) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end:true}) // match exact path, otherwise relative

    return(
        <StyledListI active={isActive}>
            <S.StyledLink to={to} {...props}>
                {children}
            </S.StyledLink>
        </StyledListI>
    )
}

export function Navbar() {
    return (
        <S.StyledContainer>
        <S.StyledNavbar>
            <S.StyledTitle href={"/"} className={"home"}>Home</S.StyledTitle>
            <S.StyledUList>
                <CustomLink to={"/smoothies"}>Smoothies</CustomLink>
                <CustomLink to={"/plan"}>Plan</CustomLink>
            </S.StyledUList>
        </S.StyledNavbar>
        </S.StyledContainer>
    )
}
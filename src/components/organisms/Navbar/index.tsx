import * as S from './styles';
import {PathMatch, useMatch, useResolvedPath} from "react-router-dom";


export interface LinkProps {
    to: string,
    children: string,
    active?: PathMatch | null,
}

const CustomLink = ({to, children, ...props} : LinkProps) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end:true}) // match exact path, otherwise relative

    return(
        <S.StyledListI active={isActive}>
            <S.StyledLink to={to} {...props}>
                {children}
            </S.StyledLink>
        </S.StyledListI>
    )
}


export const Navbar = () => {
    return (
        <S.StyledNavbar>
            <S.StyledTitle href={"/"}>Home</S.StyledTitle>
            <S.StyledUList>
                <CustomLink to={"/recipes/smoothies"}>Smoothies</CustomLink>
                <CustomLink to={"/recipes/plan"}>Plan</CustomLink>
            </S.StyledUList>
        </S.StyledNavbar>
    )
}
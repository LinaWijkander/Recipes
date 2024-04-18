import * as S from './styles';
import {PathMatch, useMatch, useResolvedPath} from "react-router-dom";
//import {LinkProps} from "../../organisms/navigationBar";

export interface RouterLinkProps {
    to: string;
    children: string | JSX.Element;
}
export interface LinkProps {
    to: string,
    children: string,
    active?: PathMatch | null,
    dataPath: string,
}

export const RouterLink = ({children, to="/", }: RouterLinkProps) => {
    return (
        <S.StyledLink to={to}>
            {children}
        </S.StyledLink>
    )
}

export const CustomLink = ({to, children, dataPath,...props} : LinkProps) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end:true}) // match exact path, otherwise relative

    return(
        <S.StyledListI active={isActive}>
            <S.StyledCustomLink to={to} {...props} state={{wantedData: {dataPath} }} preventScrollReset={true}>
                {children}
            </S.StyledCustomLink>
        </S.StyledListI>
    )
}
import * as S from './styles';
import { PathMatch, useMatch, useResolvedPath} from "react-router-dom";


export interface LinkProps {
    to: string,
    children: string,
    active?: PathMatch | null,
    dataPath: string,
}

const CustomLink = ({to, children, dataPath,...props} : LinkProps) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end:true}) // match exact path, otherwise relative
  
    return(
        <S.StyledListI active={isActive}>
            <S.StyledLink to={to} {...props} state={{wantedData: {dataPath} }} preventScrollReset={true}>
                {children}
            </S.StyledLink>
        </S.StyledListI>
    )
}

//preventScrollReset={true}

export const NavigationBar = () => {
    return (
        <S.StyledNavbar>
            <S.StyledTitle href={"/"}>Home</S.StyledTitle>
            <S.StyledUList>
                <CustomLink to={"/crafters"} dataPath={"crafters"}>Crafters</CustomLink>
                <CustomLink to={"/crochet"} dataPath={"crochet"}>Crochet</CustomLink>
                <CustomLink to={"/creations"} dataPath={"creations"}>Creations</CustomLink>
            </S.StyledUList>
        </S.StyledNavbar>
    )
}
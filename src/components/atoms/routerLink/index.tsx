import * as S from './styles';

interface RouterLinkProps {
    to: string;
    children: string | JSX.Element;
}


const RouterLink = ({children, to="/"}: RouterLinkProps) => {
    return (
        <S.StyledLink to={to}>{children}</S.StyledLink>
    )
}

export default RouterLink
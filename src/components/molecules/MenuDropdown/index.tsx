
import {RouterLink} from "../../atoms/routerLink";
import * as S from './styles';

// båda av dem har också style flex & flex-col gap4
const MenuDropdown = () => {
    return (
        <S.StyledMenuDropdown>
            <S.StyledUL>
                <RouterLink to={"/ceramics"}>Ceramics</RouterLink>
                <RouterLink to={"/crochet"}>Crochet</RouterLink>
            </S.StyledUL>
        </S.StyledMenuDropdown>
    )
}
export default MenuDropdown
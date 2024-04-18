import * as S from './styles';
import MenuDropdown from "../../molecules/MenuDropdown";
import {useState} from "react";
import {CustomLink} from "../../atoms/routerLink";



//todo kolla över routerLink och customLink components. Can they be merged?
// instead have a Navbar Item component you can style to take up 100& of parent height & that holds a routerLink

export const NavigationBar = () => {
    const [openMenuDropdown, setOpenMenuDropdown] = useState(false);
    
    return (
        <S.StyledNavbar>
            {/*"/" istf home när satt upp en faktisk hemsida*/}
            <S.StyledTitle href={"/home"}>Home</S.StyledTitle> 
            <S.StyledUList>
                {openMenuDropdown && <MenuDropdown/>}
               
                <CustomLink to={"/crafters"} dataPath={"crafters"}>Crafters</CustomLink>
                <CustomLink to={"/about"} dataPath={"about"}>About</CustomLink>
                <S.StyledDropdown onClick={()=>setOpenMenuDropdown((prev)=> !prev)}>Creations</S.StyledDropdown>
                
            </S.StyledUList>
        </S.StyledNavbar>
    )
}
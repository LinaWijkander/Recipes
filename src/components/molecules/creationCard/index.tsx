import * as S from './styles';
//import reactLogo from '../../../assets/react.svg';
import Image from "../../atoms/image";
import Title from "../../atoms/title";
import Paragraph from "../../atoms/paragraph";
//import Creation, {CreationType} from "../../pages/creation";

export interface CreationCardProps {
    title: string,
    image: string;
    type: string;
    creator: string;
    //onClick: () => void;
}

const CreationCard = (props:CreationCardProps) => {
    return (
        <S.StyledCreationCard /*onClick={onClick}*/>
            <Image size={"fitted"} src={props.image}  alt=""/>
            <S.TextContainer>
                <Title size={"h1"} text={props.title}/>
                {/*<Paragraph size={"p1"} text={props.type}/>*/}
                <Paragraph size={"p1"} text={props.creator}/>
            </S.TextContainer>
        </S.StyledCreationCard>
     
    )
}
export default CreationCard
import * as S from './styles';

export interface TitleProps {
    size: "h1" | "h2" | "h3",
    text: string,
}

const TitleType = {
    h1: S.Title_h1,
    h2: S.Title_h2,
    h3: S.Title_h3
}

const Title = ({size="h1", text="Title"} : TitleProps) => {
    const Title = TitleType[size];
    return (
        <Title>{text}</Title>
    )
}
export default Title

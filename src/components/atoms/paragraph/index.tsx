import * as S from './styles';

export interface ParagraphProps {
    size: "p1" | "p2" | "p3",
    text: string,
}

const ParagraphType = {
    p1: S.Paragraph_p1,
    p2: S.Paragraph_p2,
    p3: S.Paragraph_p3
}

const Paragraph = ({size="p1", text="Paragraph"} : ParagraphProps) => {
    const Paragraph = ParagraphType[size];
    return (
        <Paragraph>{text}</Paragraph>
    )
}
export default Paragraph

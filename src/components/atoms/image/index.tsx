import * as S from './styles';

export interface ImageProps {
    size: "small" | "medium" | "large",
    alt: string,
    src: string
}

const ImageTypes = {
    small: S.SmallImage,
    medium: S.MediumImage,
    large: S.LargeImage,
}

const Image = ({size = "medium", alt="", src}:ImageProps) => {
    const Image = ImageTypes[size];
    return (
        <Image size={size} src={src} alt={alt} />
    )
}
export default Image
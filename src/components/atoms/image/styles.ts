import styled from "styled-components";
import {ImageProps} from './index';
export const StyledImage = styled.img<ImageProps>`
  height: var(--imageContainerHeight);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
`

export const SmallImage = styled(StyledImage)`
  width: var(--imageWidth_S);
  height: var(--imageHeight_S);
`
export const MediumImage = styled(StyledImage)`
  width: var(--imageWidth_M);
  height: var(--imageHeight_M);
`
export const LargeImage = styled(StyledImage)`
  width: var(--imageWidth_L);
  height: var(--imageHeight_L);
`

export const XLImage = styled(StyledImage)`
  width: 50%;
  height: 50%;
`

export const Fitted = styled(StyledImage)`
  width: 130px;
  height: 150px;
  //object-fit: contain;
  object-fit: cover;
`
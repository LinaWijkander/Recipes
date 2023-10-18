import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`
export const PageContainer = styled.div`
  width: 100%;
  background-color: var(--parchment);
  
`

export const ContentContainer = styled.div`
  display:flex;
  flex-direction: column;
  width: var(--contentContainerWidth);
  height: var(--contentContainerHeight);
  margin: 1.5rem;
  gap: 0.5rem;
`

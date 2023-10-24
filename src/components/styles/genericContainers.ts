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
  
`

export const ScalableContainer = styled.div`
  max-width: 1200px; /* Set a maximum width for the container */
  margin: 0 auto; /* Center the container horizontally */
  padding: 20px;
  overflow-y: auto; /* Enable vertical scrolling when content exceeds container height */
  height: 100vh; /* Ensure the container takes the full viewport height */
  display:flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 768px) {
    padding: 10px; /* Adjust padding for smaller screens */
  }

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

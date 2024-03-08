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

// look over this
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

// look over this and the one above. merge to 1
export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  //width: 100%; // Ensure it fits the width of the screen
  max-width: 100vw; // Prevent horizontal scrolling on the screen width
  overflow-y: auto; // Enable vertical scrolling if needed
  gap: 10px; // Adjust the space between the children as needed

  // Make sure each child takes up half the container width minus the gap
  // Adjust the basis if you need different sizes or more columns
/*  & > * {
    flex: 1 1 calc(50% - 10px);
    max-width: calc(50% - 10px); // Ensure the children do not grow beyond the half-width minus the gap
  }*/
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  //width: 70%; /*var(--contentContainerWidth);*/
  //height: var(--contentContainerHeight);
  margin: 1.5rem;
  gap: 0.5rem;
`
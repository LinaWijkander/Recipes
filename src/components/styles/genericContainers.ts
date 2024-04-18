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

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  max-width: 100vw; // Prevent horizontal scrolling on the screen width
  overflow-y: auto; // Enable vertical scrolling if needed
  gap: 10px;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
  gap: 0.5rem;
`

export const GridContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(var(--creationCardWidth), 1fr)); /* Automatically fills the row with 150px min width columns */
  gap: 10px;
  justify-content: start;
  margin: 0 auto;
`
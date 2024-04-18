import styled from "styled-components";

export const StyledMenuDropdown = styled.div`
  position: absolute;
  top: 4.5rem;
  right: 1.5rem;
  width: 120px;
  padding: 15px;
  border-radius: 15px;
  background-color: white;
  border: 1px solid gray;

  /*&:after {
    content: "";
    position: absolute;
    top: -0.7rem;
    right: 1.1rem;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    background-color: white;
    border-left: 1px solid gray;
    border-top: 1px solid gray;
  }*/
`

export const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  max-width: 100vw; // Prevent horizontal scrolling on the screen width
  overflow-y: auto; // Enable vertical scrolling if needed
  gap: 10px;

  //gap: 50px;
`
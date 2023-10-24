import styled from 'styled-components';

export const StyledClickableCard = styled.div`
  display: flex;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const CardImage = styled.img`
  width: 100px; 
  margin-right: 16px; 
`;

export const CardContent = styled.div`
  //flex: 1; /* Allow the content to take up the remaining space */
  //display: flex; 
  //flex-direction: column; 
`;

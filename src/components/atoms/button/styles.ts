
import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: var(--grey01);
  color: var(--white);
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--grey02);
  }
`;


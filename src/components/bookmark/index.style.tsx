import styled from "styled-components";

export const ListItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  padding-bottom: 1rem;
`;

export const Label = styled.label`
  font-size: 32px;
  flex: 0 1 20%;
  white-space: nowrap;
`;

export const Input = styled.input`
  flex: 1 1 50%;
  font-size: 24px;
`;

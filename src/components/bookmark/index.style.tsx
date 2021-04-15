import styled from "styled-components";

export const ListItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  padding-bottom: 1rem;
`;

export const Label = styled.label`
  font-size: 2.5rem;
  flex: 0 1 20%;
  white-space: nowrap;
`;

export const Input = styled.input`
  flex: 1 0 50%;
  font-size: 2rem;
  padding: 0 1rem;
`;

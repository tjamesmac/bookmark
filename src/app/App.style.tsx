import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem 3rem;
  background-color: #282c34;
  min-height: 100vh;
  color: white;
`;

export const AddGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 75%;
`;

export const Input = styled.input`
  padding: 0rem 1rem;
  flex: 1 1 50%;
  font-size: 2rem;
`;

enum sizes {
  small = 2,
  default = 1,
}

type size = {
  [key: string]: number;
};

const buttonSizes: size = {
  small: sizes.small,
  default: sizes.default,
};

// come back to this later
export const Button = styled.button<any>`
  font-size: 2rem;
  flex: 0 1 15%;
  padding: 0.5rem 1rem;
  /* font-size: ${({ size }: size) => (size ? buttonSizes[size] : "2rem")};
  padding: ${({ size }: size) => (size ? buttonSizes[size] : "0.5rem 1rem")}; */
  border: 1px solid indianred !important;
  border-radius: 0.25rem;
  outline: none;
  background-color: indianred;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

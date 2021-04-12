import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 1rem;
`;

export const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
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
`;

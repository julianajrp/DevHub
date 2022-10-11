import styled from "styled-components";

export const InputDefault = styled.input`
  width: 325px;
  height: 50px;
  background: var(--bcgInputColor);
  /* Gray 5 */

  border: 2px solid var(--grey2);
  border-radius: 4px;
  padding: 0px 10px 0px 20px;
  color: var(--letterColorWhite);
  &:hover {
    border: 2px solid var(--grey0);
    border-radius: 4px;
    outline: transparent;
  }
`;

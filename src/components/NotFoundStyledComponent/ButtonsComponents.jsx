import styled from "styled-components";

export const BtnPrimario = styled.button`
  width: 130px;
  height: 50px;
  background-color: var(--pink-trans);
  border: 1px solid var(--pink-trans);
  border-radius: 4px;
  color: var(--letterColorWhite);
  padding: 0 20px;
  &:hover {
    background-color: var(--pink-trans-focus);
    border: 1px solid var(--pink-trans-focus);
  }
`;
export const BtnNegativo = styled.button`
  width: 130px;
  height: 50px;
  background-color: var(--grey2);
  border: 1px solid var(--grey2);
  border-radius: 4px;
  color: var(--letterColorWhite);
  padding: 0 20px;
  &:hover {
    background-color: var(--grey1);
    border: 1px solid var(--grey1);
  }
`;
export const BtnDesabilitado = styled.button`
  width: 130px;
  height: 50px;
  background-color: var(--colorPrimaryNegative);
  border: 1px solid var(--colorPrimaryNegative);
  border-radius: 4px;
  color: var(--letterColorWhite);
  padding: 0 20px;
`;

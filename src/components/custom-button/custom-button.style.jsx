import styled, { css } from "styled-components";

const Buttonstyle = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const Invertedstyle = css`
  background-color: black;
  color: white;
  border: 1px solid black;

  &:hover {
    background-color: white;
    color: black;
    border: none;
  }
`;

const Singinwithgoogle = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const Getbuttonstyle = props => {
  if (props.isgoogleSingIn) {
    return Singinwithgoogle;
  }

  return props.inverted ? Invertedstyle : Buttonstyle;
};

export const CustomButtoncontainerstyle = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  font-family: Open Sans Condensed;
  transition: all 0.2s;
  display: flex;
  border: none;
  justify-content: center;

  ${Getbuttonstyle}
`;

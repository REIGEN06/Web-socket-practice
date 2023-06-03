import { loremIpsum } from "lorem-ipsum";
import styled from "styled-components";

const StyledText = styled.p`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin: 0px 10px 10px 10px;
  padding: 10px;
  display: flex;
  justify-content: ${(props) => props.$side || "start"};
  font-size: ${(props) => props.$size || "14px"};
`;

const Wrapper = styled.div`
  padding: 30px;
`;
const Input = styled.input.attrs({
  type: "submit",
  value: "Submit",
})`
  background: #00aec9;
  color: #fff;
  cursor: pointer;
  margin-bottom: 0;
  text-transform: uppercase;
  width: 100%;
  border-radius: 5px;
  height: 35px;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  text-align: center;
  &:active {
    background-color: #f1ac15;
  }
`;
const BuildPage = (index) => (
  <Wrapper>
    <StyledText $size="20px">Page {index}</StyledText>
    <StyledText>
      Page {index} content: {loremIpsum({ count: 5 })}
    </StyledText>
  </Wrapper>
);
const Registration = () => (
  <StyledText $size="20px">Welcome to the registration page!</StyledText>
);
const SigningIn = () => (
  <Wrapper>
    <StyledText $size="20px" $side="center">
      Welcome to the sign in page!
    </StyledText>
    <StyledText>Enter your email</StyledText>
    <Input />
  </Wrapper>
);

export const PageZero = () => (
  <Wrapper>
    <StyledText $size="20px" $side="center">
      This is the main page, choose any other!
    </StyledText>
  </Wrapper>
);
export const PageOne = () => BuildPage(1);
export const PageTwo = () => BuildPage(2);
export const Register = () => Registration();
export const SignIn = () => SigningIn();

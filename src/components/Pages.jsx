import { loremIpsum } from "lorem-ipsum";
import styled, { keyframes } from "styled-components";

const StyledText = styled.p`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin: 0px;
  padding: 10px;
  display: flex;
  justify-content: ${(props) => props.$side || "start"};
  font-size: ${(props) => props.$size || "14px"};
`;
const colorChangeText = keyframes`
  0% {
    color: #3a3a3a;
  }
  33% {
    color: #7637f9;
  }
  66% {
    color: #7637f9;
  }
  100% {
    color: #3a3a3a;
  }
`;
const ColorChangeText = styled.div`
  animation: ${colorChangeText} 4s ease infinite;
`;
const Wrapper = styled.div`
  padding: 30px;
`;
const ColumnCenter = styled.section`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const Input = styled.input.attrs((props) => ({
  type: "text",
  $size: props.$size || "10px",
  $color: props.$color || "#6422fd",
}))`
  border: 2px solid;
  border-color: ${(props) => props.$color};
  border-radius: 3px;
  margin: 0px 10px 10px 10px;
  padding: ${(props) => props.$size};
`;

const Submit = styled(Input).attrs((props) => ({
  type: "submit",
  value: props.$value,
}))`
  border-color: black;
  padding: 10px;
  margin: 30px;
  cursor: pointer;
  min-width: 185px;
  &:hover {
    background-color: #c6a8f7;
    transform: scale(1.05);
  }
  &:active {
    background-color: #f1ac15;
  }
`;
const BuildPage = (index) => {
  return (
    <Wrapper>
      <StyledText $size="20px">Page {index}</StyledText>
      <StyledText>
        Page {index} content: {loremIpsum({ count: 5 })}
      </StyledText>
    </Wrapper>
  );
};
const SignUpPage = () => {
  return (
    <Wrapper>
      <ColumnCenter>
        <ColorChangeText>
          <StyledText $size="20px">
            Welcome to the Registration page!
          </StyledText>
        </ColorChangeText>
        <StyledText>Username</StyledText>
        <Input placeholder="Enter your Username" />
        <StyledText>Email</StyledText>
        <Input placeholder="Enter your Email" />
        <StyledText>Password</StyledText>
        <Input placeholder="Enter your password" $color="#f3bf0e" />
        <StyledText>Repeat Password</StyledText>
        <Input placeholder="Repeat your password" $color="#f3bf0e" />
        <Submit $value="Create new account" />
      </ColumnCenter>
    </Wrapper>
  );
};
const LogInPage = () => {
  return (
    <Wrapper>
      <ColumnCenter>
        <ColorChangeText>
          <StyledText $size="20px">Welcome to the Log In page!</StyledText>
        </ColorChangeText>
        <StyledText>Email</StyledText>
        <Input placeholder="Enter your Email" />
        <StyledText>Password</StyledText>
        <Input placeholder="Enter your password" $color="#f3bf0e" />
        <Submit $value="Log in" />
      </ColumnCenter>
    </Wrapper>
  );
};

export const PageZero = () => {
  return (
    <Wrapper>
      <StyledText $size="20px" $side="center">
        This is the main page, choose any other!
      </StyledText>
    </Wrapper>
  );
};
export const PageOne = () => BuildPage(1);
export const PageTwo = () => BuildPage(2);
export const SignUp = () => SignUpPage();
export const LogIn = () => LogInPage();

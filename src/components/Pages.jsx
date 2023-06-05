import { loremIpsum } from "lorem-ipsum";
import { useState } from "react";
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
  const [state, setState] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!state.username) {
      alert("Enter the name!");
      return;
    } else if (!state.email) {
      alert("Enter the email!");
      return;
    } else if (!state.pass) {
      alert("Enter the password!");
      return;
    } else if (!state.dblpass) {
      alert("Confirm the password!");
      return;
    }
    if (!(state.pass === state.dblpass)) {
      alert("Password mismatch");
      return;
    }
    const EMAIL_REGEXP =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if (!state.email.match(EMAIL_REGEXP)) {
      alert("Invalid email");
      return;
    }
    localStorage.setItem("username", state.username);
    localStorage.setItem("email", state.email);
    localStorage.setItem("pass", state.pass);
    localStorage.setItem("dblpass", state.dblpass);
    window.location.reload();
    alert("Account created!");
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <ColumnCenter>
          <ColorChangeText>
            <StyledText $size="20px">
              Welcome to the Registration page!
            </StyledText>
          </ColorChangeText>
          <StyledText>Username</StyledText>
          <Input
            placeholder="Enter your Username"
            onChange={(e) => {
              setState({ ...state, username: e.target.value });
            }}
          />
          <StyledText>Email</StyledText>
          <Input
            placeholder="Enter your Email"
            onChange={(e) => {
              setState({ ...state, email: e.target.value });
            }}
          />
          <StyledText>Password</StyledText>
          <Input
            placeholder="Enter your password"
            $color="#f3bf0e"
            onChange={(e) => {
              setState({ ...state, pass: e.target.value });
            }}
          />
          <StyledText>Repeat Password</StyledText>
          <Input
            placeholder="Repeat your password"
            $color="#f3bf0e"
            onChange={(e) => {
              setState({ ...state, dblpass: e.target.value });
            }}
          />
          <Submit $value="Create new account" />
        </ColumnCenter>
      </form>
    </Wrapper>
  );
};
const LogInPage = () => {
  const [state, setState] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    if (!state.confirmEmail) {
      alert("Enter the email!");
      return;
    } else if (!state.confirmPass) {
      alert("Enter the password!");
      return;
    }
    if (
      localStorage.getItem("email") !== state.confirmEmail ||
      localStorage.getItem("pass") !== state.confirmPass
    ) {
      alert("Invalid email or password!");
      return;
    }
    window.location.reload();
    alert("You are logged in!");
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <ColumnCenter>
          <ColorChangeText>
            <StyledText $size="20px">Welcome to the Log In page!</StyledText>
          </ColorChangeText>
          <StyledText>Email</StyledText>
          <Input
            placeholder="Enter your Email"
            onChange={(e) => {
              setState({ ...state, confirmEmail: e.target.value });
            }}
          />
          <StyledText>Password</StyledText>
          <Input
            placeholder="Enter your password"
            $color="#f3bf0e"
            onChange={(e) => {
              setState({ ...state, confirmPass: e.target.value });
            }}
          />
          <Submit $value="Log in" />
        </ColumnCenter>
      </form>
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

import { Outlet, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.section`
  background: #ffd3ce;
`;
const ColorPage = styled.section`
  background: #d0d9fd;
`;
const NavBar = styled.section`
  background: #86b2f5;
  align-items: center;
  display: flex;
  padding: 4px;
`;
const NavButton = styled.button`
  border: thin solid #ff8080;
  border-radius: 5px;
  height: 30px;
  width: 60px;

  &:hover {
    background: #ff8080;
  }
`;
const StyledText = styled.p`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin: 5px;
  font-size: ${(props) => props.$size || "14px"};
`;

const colorChange = keyframes`
  0% {
    color: #eb5256;
  }
  33% {
    color: #7637f9;
  }
  66% {
    color: #17f9dd;
  }
  100% {
    color: #eb5256;
  }
`;
const ColorChange = styled.div`
  animation: ${colorChange} 4s ease infinite;
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 5s linear infinite;
  padding: 10px;
  font-size: 30px;
`;

export const MainPage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <NavBar>
        <Rotate>😳</Rotate>
        <ColorChange>
          <StyledText $size="20px">
            Hello, everynyan, how are you? Fine, thank you
          </StyledText>
        </ColorChange>
        <NavButton onClick={() => navigate("/", { replace: false })}>
          <StyledText>Home</StyledText>
        </NavButton>
        <NavButton onClick={() => navigate("one", { replace: false })}>
          <StyledText>One</StyledText>
        </NavButton>
        <NavButton onClick={() => navigate("two", { replace: false })}>
          <StyledText>Two</StyledText>
        </NavButton>
      </NavBar>
      <ColorPage>
        <Outlet />
      </ColorPage>
    </Wrapper>
  );
};

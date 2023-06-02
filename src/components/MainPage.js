import { Outlet, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useState } from "react";

const Wrapper = styled.section`
  background: #ffd3ce;
`;
const ColorPage = styled.section`
  background: #d0d9fd;
`;
const NavBar = styled.section`
  //background: #86b2f5;
  align-items: center;
  display: flex;
  padding: 4px;
`;

const NavButton = styled.button`
  border-radius: 5px;
  height: 30px;
  width: 60px;
  cursor: pointer;
  background-color: ${(props) =>
    props.className === "active" ? "#9fa5ff" : ""};

  &:hover {
    background-color: #c6a8f7;
    transform: scale(1.05);
  }
`;

const StyledText = styled.p`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin: 5px;
  font-size: ${(props) => props.$size || "14px"};
`;
const colorChangeBackground = keyframes`
  0% {
    background-color: #68c6f9;
  }
  33% {
    background-color: #86b2f5;
  }
  66% {
    background-color: #86b2f5;
  }
  100% {
    background-color: #68c6f9;
  }
`;
const ColorChangeBackground = styled.div`
  animation: ${colorChangeBackground} 4s ease infinite;
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
  const [active, setActive] = useState(document.location.pathname);
  const navigate = useNavigate();

  const handleClick = (event) => {
    navigate(event.target.id, { replace: false });
    setActive(event.target.id);
  };

  return (
    <Wrapper>
      <ColorChangeBackground>
        <NavBar>
          <Rotate>😳</Rotate>
          <ColorChangeText>
            <StyledText $size="20px">
              Hello, everynyan, how are you? Fine, thank you
            </StyledText>
          </ColorChangeText>
          <NavButton
            id={"/"}
            onClick={handleClick}
            className={active === "/" ? "active" : undefined}
          >
            <StyledText id={"/"}>Home</StyledText>
          </NavButton>
          <NavButton
            id={"/one"}
            onClick={handleClick}
            className={active === "/one" ? "active" : undefined}
          >
            <StyledText id={"/one"}>One</StyledText>
          </NavButton>
          <NavButton
            id={"/two"}
            onClick={handleClick}
            className={active === "/two" ? "active" : undefined}
          >
            <StyledText id={"/two"}>Two</StyledText>
          </NavButton>
        </NavBar>
      </ColorChangeBackground>
      <ColorPage>
        <Outlet />
      </ColorPage>
    </Wrapper>
  );
};

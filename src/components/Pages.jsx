import { loremIpsum } from "lorem-ipsum";
import styled from "styled-components";

const StyledText = styled.p`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin: 0px 10px 10px 10px;
  padding: 10px;
  font-size: ${(props) => props.$size || "14px"};
`;

const BuildPage = (index) => (
  <>
    <StyledText $size="20px">Page {index}</StyledText>
    <StyledText>
      Page {index} content: {loremIpsum({ count: 5 })}
    </StyledText>
  </>
);
const BuildPage1 = (index) => (
  <>
    <StyledText $size="20px">Page {index}</StyledText>
    <StyledText>
      Page {index} content: {loremIpsum({ count: 500 })}
    </StyledText>
  </>
);

export const PageZero = () => (
  <StyledText>This is the main page, choose any other!</StyledText>
);
export const PageOne = () => BuildPage(1);
export const PageTwo = () => BuildPage1(2);

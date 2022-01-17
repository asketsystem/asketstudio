import styled, { css } from "styled-components"
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Feature from "./components/Feature";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: -1;
`;

const IntoShape = styled.div`
  ${Shape}
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 55% 100%);
  background-color: orange;
`;

const FeatureShape = styled.div`
  ${Shape}
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
  background-color: pink;
`;

const App = () => {
  return (
    <>
      <Container>
        <Navbar/>
        <Intro/>
        <IntoShape/>
      </Container>
      <Container>
        <Feature/>
        <FeatureShape/>
      </Container>
    </>
  )
};

export default App;
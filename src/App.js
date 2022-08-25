import React from "react";
import styled from "styled-components";
import HomeComponent from "./modules/home";

const Container = styled.div`
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  align-items: center;
  height:95vh;
  font-weight:bold;
  font-family: 'Inter', sans-serif;
  background:linear-gradient( to right,#71C5EE,#025091);
`;

const App = () => {
  return (
    <Container>
      <HomeComponent />
    </Container>
  );
};

export default App;

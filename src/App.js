import React, { useState, useEffect } from "react";
import { GlobalStyle, Container, Title, Wrapper, Box } from "./components";
import { DAY, MINUTE, SECOND, HOUR } from "./constants";

function App() {
  const date = new Date("Jan 25, 2020 00:00:00 ").getTime();
  let now = new Date().getTime();
  let gap = date - now;
  const [countDate, setCountDate] = useState(gap);

  const days = Math.floor(countDate / DAY);
  const hours = Math.floor((countDate % DAY) / HOUR);
  const minutes = Math.floor((countDate % HOUR) / MINUTE);
  const seconds = Math.floor((countDate % MINUTE) / SECOND);

  useEffect(() => {
    const time = setInterval(() => {
      setCountDate(countDate - 1000);
    }, 1000);
    return () => {
      clearInterval(time);
    };
  }, [countDate]);
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>
          <span>Countdown to Lunar New Year</span>2020
        </Title>
        <Wrapper>
          <Box content="Days">{days}</Box>
          <Box content="Hours">{hours}</Box>
          <Box content="Minutes">{minutes}</Box>
          <Box content="Seconds">{seconds}</Box>
        </Wrapper>
      </Container>
    </>
  );
}

export default App;

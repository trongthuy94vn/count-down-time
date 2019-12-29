import styled, { createGlobalStyle } from "styled-components";
import bg from "./bg.jpg";

export const GlobalStyle = createGlobalStyle`
    * {
    margin:0;
    padding:0;
    font-family: 'Dancing Script', cursive;
    }
  body {
    color: #000;
    background-image: url(${bg});
    background-attachment: fixed;
    background-blend-mode:hard-light;
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 80px;
  left: 100px;
  right: 100px;
  bottom: 80px;
  background-image: url(${bg});
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 50px 50px rgba(0, 0, 0, 0.5), 0 0 0 100px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 10em;
  line-height: 0.7em;
  color: #333;

  span {
    display: block;
    font-weight: 300;
    letter-spacing: 6px;
    font-size: 0.2em;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: 50px;
`;

export const Box = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  background-color: #333;
  color: #fff;
  margin: 0 15px;
  font-size:2rem;
  
  :before {
    content: '${props => props.content}';
    position: absolute;
    bottom: -30px;
    left: 0;
    width: 100%;
    height: 50px;
    background: #ff0;
    color: #333;
    font-size: 1.35rem;
    line-height: 50px;
  }
`;

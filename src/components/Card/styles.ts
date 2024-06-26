import styled from "styled-components";
import { Props } from ".";

export const Container = styled.div<
Omit<
  Props,
  | 'nome'
  | 'descricao'
  | 'tecnologia1'
  | 'tecnologia2'
  | 'tecnologia3'
  | 'image'
>
>`
  border: 1px solid black;
  border-radius: 10px;
  max-width: 640px;
  width: 100%;
  background-color: ${props =>
    props.background === 'black' ? 'black' :
    props.background === 'blue' ? '#004B8D' :
    props.background === 'red' ? 'red' : '#1E90FF'
  };
  margin-bottom: 20px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 1);

  div {
    display: flex;
    justify-content: space-between;
    margin-left: 8px;

    h1 {
      color: #fff;
      font-family: 'Roboto', sans-serif;
    }

  img{
    margin-top: 4%;
    width: 360px;
    height: 160px;
    margin-right: 0px;
    object-fit: contain;
  }
  }

  p {
    margin-top: -132px;
    margin-left: 8px;
    word-wrap: break-word;
    max-width: 36%;
    font-family: 'Roboto', sans-serif;
    color: #fff;
  }

  .ul-wrapper {
    padding-left: 8px; /* Remova o padding-left padrão da <ul> */
  }
  ul {
    display: flex;
    padding: 16px;
    li {
      margin-right: 8px;
      list-style: none;
      font-family: 'Roboto', sans-serif;
      border: 1px solid #fff;
      padding: 4px;
      color: #fff;
    }
  }



  button {
    margin: 10px;
    padding: 8px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: black;
    display: block;
    cursor: pointer;
  }

  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }


`

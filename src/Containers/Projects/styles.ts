import styled, { createGlobalStyle } from "styled-components";

export const EstiloGlobals = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    list-style: none;
    text-decoration: none;
}
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;


  .titulo {
    font-family: 'Roboto', sans-serif;
    font-size: 48px;
    background: linear-gradient(to bottom left, #9A17E0, #00BFFF);
    -webkit-background-clip: text; /* Use -webkit-background-clip para navegadores Webkit */
    background-clip: text; /* Esta propriedade aplica o gradiente ao texto */
    color: transparent;
  }

  `
export const Avatar = styled.img`
width: 160px;
height: 160px;
`

export const ButtonGithub = styled.button`
  position: absolute;
  display: flex;
  right: 24px;
  top: 24px;
  padding: 8px;
  cursor: pointer;
  background: linear-gradient(to bottom left, #9A17E0, #00BFFF);
  border: none;
  color: #fff;
  border-radius: 5px;

  img {
    width: 16px;
    height: 16px;
    padding-left: 4px;
  }

  &:hover {
    transition: 1s;
    padding: 12px;
  }
`

export const Voltar = styled.p`
  cursor: pointer;
  padding-top: 24px;
  padding-left: 24px;
`

export const ContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  color: #333333;
`


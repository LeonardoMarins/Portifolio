import styled from "styled-components";


export const ContainerCard = styled.div`
    border: 1px solid #708090;
    max-width: 680px;
    padding: 40px 0;
    width: 100%;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
    margin-top: -12px;
    position: relative;
    margin-bottom: 60px;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 260px;
      height: 160px;
    }

    .ul-wrapper {
      list-style: none;
    }
`

export const Avatar = styled.img`
  width: 160px;
  height: 160px;
  position: absolute;
  left: 54%;
  top: 0;
`

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 206px;
  font-family: 'Roboto', sans-serif;
  font-size: 48px;
  background: linear-gradient(to bottom left, #9A17E0, #00BFFF);
  -webkit-background-clip: text; /* Use -webkit-background-clip para navegadores Webkit */
  background-clip: text; /* Esta propriedade aplica o gradiente ao texto */
  color: transparent;
`


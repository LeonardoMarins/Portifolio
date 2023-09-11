import { Container } from "./styles"

export type Props = {
  nome: string,
  descricao: string,
  tecnologia1: string,
  tecnologia2: string,
  tecnologia3: string,
  image: string,
  background: string,
  button?: true
}


const Card = ({descricao,nome,tecnologia1,tecnologia3,tecnologia2,image, background,button}:Props) => {
  return (
    <>
      <Container background={background}>
        <div>
        <h1>{nome}</h1>
        <img src={image} alt="imagem do projeto" />
        </div>
        <p>{descricao}</p>
        <ul className="ul-wrapper">
          <li>{tecnologia1}</li>
          <li>{tecnologia2}</li>
          <li>{tecnologia3}</li>
        </ul>
        {button ? (
          <button>Ver projeto</button>
        ): (
          ''
        )}
      </Container>
    </>
  )
}

export default Card

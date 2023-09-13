import { Avatar, Container, ContainerCard } from './styles'
import avatar from '../../img/Avatar.png'
import { ButtonGithub } from '../../Containers/Projects/styles'
import github from '../../img/github.svg'

type Props = {
  img:string,
  ano:string,
  cargo:string,
  empresa:string,
  local:string,
  funcao:string,
  funcao2:string,
  funcao3:string,
  funcao4:string,
}

export const CardExperience = ({ano,cargo,empresa,funcao,funcao2,funcao3,funcao4,img,local}:Props) => {
  return (
    <>
    <Avatar src={avatar} alt="" />
    <ContainerCard>
      <Container>
        <img src={img} alt="" style={{marginLeft: 20, borderRadius: 10}} />
        <ul className='ul-wrapper'>
          <li>{ano}</li>
          <li>{cargo}</li>
          <li>{empresa}</li>
          <li>{local}</li>
        </ul>
        <ul>
          <li>{funcao}</li>
          <li>{funcao2}</li>
          <li>{funcao3}</li>
          <li>{funcao4}</li>
        </ul>
      </Container>
    </ContainerCard>
    <a href="https://github.com/LeonardoMarins" target="_blank"><ButtonGithub><img src={github} alt="icone github" /></ButtonGithub></a>
    </>
  )
}

export default CardExperience

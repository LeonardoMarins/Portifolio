import Card from "../../components/Card"
import oeg from '../../img/OEGlogoPB.png'
import eplay from '../../img/logo vetor.png'
import avatar from '../../img/Avatar.png'
import fortes from '../../img/logo-fortes.png'
import { Avatar, ButtonGithub, Container, ContainerDiv, EstiloGlobals, Voltar } from "./styles"
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import github from '../../img/github.svg'


const Projects = () => {

  useEffect(() => {
    AOS.init({
      duration: 3000, // Duração da animação em milissegundos
      offset: 200,
    });
  },[])
  return (
    <>
    <EstiloGlobals/>
    <ContainerDiv>
      <a href="/"><Voltar>&#11178;voltar</Voltar></a>
      <Container data-aos="fade-right">
      <h1 className="titulo">Projetos</h1>
      <Avatar src={avatar} alt="" />
      <Card background="blue" descricao='Desenvolvendo um sistema de formulários,checklist e controle de equipamentos da empresa OEG offshore, em conjunto com a empresa junior case.' nome='Sistema oeg' image={oeg} tecnologia1='SQL' tecnologia2='PHP' tecnologia3='JAVASCRIPT' />
      <Card href="https://eplay-gray.vercel.app/" button background="black" descricao='Desenvolvimento de um site de jogos do curso da EBAC, onde foi necessário consumir uma API e criar o layout, incluindo a implementação de um modal e um carrinho de compras, utilizando o Redux para o gerenciamento de estado.' nome='Eplay' image={eplay} tecnologia1='REACT' tecnologia2='STYLED-COMPONENTS' tecnologia3='REDUX' />
      <Card href="https://contabilidadefortes.com.br/" button background="" descricao='Criação do site da Fortes Contabilidade pela empresa júnior Case da Faculdade Femass, onde atualmente exerço o cargo de Diretor de Projetos.' nome='Site Fortes' image={fortes} tecnologia1='REACT' tecnologia2='STYLED-COMPONENTS' tecnologia3='REDUX' />
      </Container>
      <a href="https://github.com/LeonardoMarins" target="_blank"><ButtonGithub>Visitar o Github<img src={github} alt="icone github" /></ButtonGithub></a>
      </ContainerDiv>
    </>
  )
}


export default Projects

import Card from "../../components/Card"
import oeg from '../../img/OEGlogoPB.png'
import eplay from '../../img/logo vetor.png'
import avatar from '../../img/Avatar.png'
import fortes from '../../img/logo-fortes.png'
import { Avatar, Container } from "./styles"
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';


const Projects = () => {

  useEffect(() => {
    AOS.init({
      duration: 3000, // Duração da animação em milissegundos
      offset: 200,
    });
  },[])
  return (
    <>
      <Container data-aos="fade-right">
      <h1 className="titulo">Projetos</h1>
      <Avatar src={avatar} alt="" />
      <Card background="blue" descricao='Desenvolvendo um sistema de formulários,checklist e controle de equipamentos da empresa OEG offshore, em conjunto com a empresa junior case.' nome='Sistema oeg' image={oeg} tecnologia1='SQL' tecnologia2='PHP' tecnologia3='JAVASCRIPT' />
      <Card button background="black" descricao='Desenvolvimento de um site de jogos do curso da EBAC onde tivemos que consumir uma API e montar o layout com um modal e um carrinho de compras utilizando o redux para gerenciamento de estado.' nome='Eplay' image={eplay} tecnologia1='REACT' tecnologia2='STYLED-COMPONENTS' tecnologia3='REDUX' />
      <Card button background="" descricao='Criação do site da Fortes contabilidade pela empresa junior Case da faculdade Femass onde atualmente sou o Diretor de projetos' nome='Site Fortes' image={fortes} tecnologia1='REACT' tecnologia2='STYLED-COMPONENTS' tecnologia3='REDUX' />
      </Container>
    </>
  )
}


export default Projects

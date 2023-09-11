import Title from '../../components/Title'
import Paragrafo from '../../components/Paragraph'
import { Section } from './styles'
import NavBar from '../../components/NavBar'
import Github from '../../components/Github'

const Sobre = () => {
  return (
    <>
    <Section>
      <NavBar />
      <Title fontSize={16}>Sobre mim</Title>
      <Paragrafo tipo="secundario">
      Desenvolvedor Full Stack Java em formação pela EBAC – Escola Britânica de Artes Criativas e Tecnologia. Graduando em Sistema de informação, profissional com perfil em trabalhar com equipe.
      Participação e Elaboração de Desenvolvimento de sistemas web e aplicativos mobile; (desenvolvi com minha equipe um sistema de cadastro de formulário e checklists para uma empresa em Macaé onde aprendi competências como php,html,css,Javascript,mysql,git,github,nextJs e prisma ).
      </Paragrafo>
      <Paragrafo tipo='secundario'>
      • Habilidades em: html,css,sass,gulp,metodologia BEM,git e github;
      </Paragrafo>
      <Paragrafo tipo='secundario'>
      • Conhecimentos: Javascript,nextJS,Java,mysql,prisma,SQL,react e typescript;
      </Paragrafo>
      <Paragrafo tipo='secundario'>
      • Noções de: React native,php,redux,jest e cypress
      </Paragrafo>
      <Github />
    </Section>
  </>
  )
}

export default Sobre

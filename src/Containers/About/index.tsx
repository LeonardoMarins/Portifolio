import Title from '../../components/Title'
import Paragrafo from '../../components/Paragraph'
import { GithubSection, Section } from './styles'

const Sobre = () => {
  return (
    <Section>
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
      <div>
        <GithubSection>
          <img src="https://github-readme-stats.vercel.app/api?username=LeonardoMarins&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=LeonardoMarins&layout=compact&langs_count=7&theme=dracula" />
        </GithubSection>
      </div>
    </Section>
  )
}

export default Sobre

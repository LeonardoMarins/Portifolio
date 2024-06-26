import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragraph'
import Title from '../../components/Title'

import { Descricao, BotaoTema, SidebarContainer, Container } from './styles'

type props = {
  trocaTema: () => void
}

const Sidebar = ({ trocaTema }: props) => {
  return (
    <>
      <Container>
        <SidebarContainer>
          <Avatar />
          <Title fontSize={20}>Leonardo Marins</Title>
          <Paragrafo tipo="secundario" fontSize={16}>
            Leonardo Lima
          </Paragrafo>
          <Descricao tipo="principal" fontSize={12}>
            Desenvolvedor Full stack Java
          </Descricao>
          <BotaoTema onClick={trocaTema}>Trocar Temas</BotaoTema>
        </SidebarContainer>
      </Container>
    </>
  )
}

export default Sidebar

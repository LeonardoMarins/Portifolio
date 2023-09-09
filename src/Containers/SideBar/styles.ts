import { styled } from 'styled-components'
import { P } from '../../components/Paragraph/styles'

export const Container = styled.aside`
@media (max-width: 768px) {
  display: flex;
  align-items: center;
  justify-content: center;
  }
`

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`

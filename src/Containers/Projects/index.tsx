import Projeto from '../../components/Project'
import Title from '../../components/Title'

import { Lista } from './styles'

const Projetos = () => {
  return (
    <section>
      <Title fontSize={16}>Projetos</Title>
      <Lista>
        <li>
          <Projeto />
        </li>
      </Lista>
    </section>
  )
}

export default Projetos

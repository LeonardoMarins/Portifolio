import Paragrafo from "../Paragraph"
import { Links, Lista } from "./styles"


const NavBar = () => {
  return (
    <>
      <nav>
        <Lista>
          <li><Links to={'/projetos'}><Paragrafo>Projetos</Paragrafo></Links></li>
          <li><Links to={'/curriculo'}><Paragrafo>Currículo</Paragrafo></Links></li>
          <li><a href="mailto:marins.dev@gmail.com"><Paragrafo>Contato</Paragrafo></a></li>
        </Lista>
      </nav>
    </>
  )
}

export default NavBar

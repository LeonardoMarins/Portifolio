import { Links, Lista } from "./styles"


const NavBar = () => {
  return (
    <>
      <nav>
        <Lista>
          <li><Links to={'/projetos'}>Projetos</Links></li>
          <li><Links to={'/curriculo'}>Currículo</Links></li>
          <li><Links to={'/experiencia'}>Experiência</Links></li>
        </Lista>
      </nav>
    </>
  )
}

export default NavBar

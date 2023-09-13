import CardExperience from "../../components/CardExperience";
import { Title } from "./styles";
import oil from '../../img/Oil_States_Logo-WGTealBlueBg.png';
import { Voltar } from "../Projects/styles";
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Case from '../../img/case.jpg';

const Curriculo = () => {

  useEffect(() => {
    AOS.init({
      duration: 3000, // Duração da animação em milissegundos
      offset: 200,
    });
  },[])
  return (
    <>
  <div data-aos="fade-right">
    <a href="/"><Voltar>&#11178;voltar</Voltar></a>
    <Title>Experiências</Title>
      <CardExperience ano="2022-2023" cargo="Estagiario TI" empresa="Oil states do Brasil" funcao="help desk" funcao2="instalação de software" funcao3="montagem de instação de trabalho" funcao4="formatação de computadores" img={oil} local="Macaé RJ" />
      <CardExperience ano="2022" cargo="Diretor de projetos" empresa="Case empresa junior" funcao="lider do time de tecnologia da faculdade" funcao2="Programação" funcao3="liderança" funcao4="atendimento ao cliente" img={Case} local="Macaé RJ" />
  </div>
    </>
  )
}

export default Curriculo

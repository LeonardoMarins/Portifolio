import { useEffect, useState } from 'react';
import Paragrafo from '../Paragraph'
import Title from '../Title'

import { Card, LinkBotao } from './styles'

export interface Repositorio {
  id: number;
  name: string;
  language: string;
  html_url: string;
}

const Projeto = () => {
  const [repos, setRepos] = useState<Repositorio[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [deuErro, setDeuErro] = useState(false);

  useEffect(() => {
    setCarregando(true);
    setDeuErro(false);

    fetch('https://api.github.com/users/LeonardoMarins/repos')
      .then(res => {
        if (res.status === 200 || res.status === 204) {
          return res.json();
        } else {
          throw new Error('Erro na solicitação');
        }
      })
      .then(resJson => {
        setTimeout(() => {
          setCarregando(false);
          setRepos(resJson);
        }, 3000);
      })
      .catch(error => {
        console.error('Erro na solicitação:', error);
        setCarregando(false);
        setDeuErro(true);
      });
  }, []);

  return (
    <>
      {carregando ? (
        <h1>Carregando...</h1>
      ) : (
        repos.map((repositorio) => (
          <Card key={repositorio.id}>
            <Title>{repositorio.name}</Title>
            <Paragrafo tipo="secundario">
              {repositorio.language}
            </Paragrafo>
            <LinkBotao target='_black' href={repositorio.html_url}>Visualizar</LinkBotao>
          </Card>
        ))
      )}
    </>
  )
}

export default Projeto

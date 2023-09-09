import { styled } from 'styled-components'

export const Section = styled.div``

export const GithubSection = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
  img {
    height: 157px;
  }

  @media (max-width: 768px) {
    img {
      width: 100%;
    }
  }
`

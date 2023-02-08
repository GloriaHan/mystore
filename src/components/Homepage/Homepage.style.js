import styled from 'styled-components'

export const Root = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 60px auto 60px;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    height:100%
  }
`

export const Content = styled.div`
  display: flex;
  height: 100%;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`

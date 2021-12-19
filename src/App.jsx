import Sidenav from './section/Sidenav/index'
import styled from "styled-components"
import Detail from './section/Details'
import Context from "./section/Content/Content"
import "./App.css"

const Container = styled.div`
  display: flex;
  background-color: #F5F5FD;
`

function App() {
  
  return (
    <Container>
      <Sidenav/>
      <Detail/>
      <Context/>
    </Container>
  )
}

export default App

import { Navbar, Nav, Container } from "react-bootstrap"
const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <Nav>
              <Nav.Link href="#trending">TRENDING GAME</Nav.Link>
              <Nav.Link href="#best">BEST GAME</Nav.Link>
            </Nav>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar

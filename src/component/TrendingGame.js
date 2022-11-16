import { Container, Row, Col, Card, Image } from "react-bootstrap"
import minecraftImage from "../asset/trending/minecraft.jpg"
import farCryImage from "../asset/trending/farCry6.jpg"
import lolImage from "../asset/trending/lol.jpg"
import olliwoorldImage from "../asset/trending/olliworld.jpg"
import valorantImage from "../asset/trending/valorant.jpg"
import wowImage from "../asset/trending/wow.jpg"
const TrendingGame = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white text-center" id="trending">
          TRENDING GAMES
        </h1>
        <br />

        <Row>
          <Col md={4}>
            <Card className="gameImage">
              <Image src={minecraftImage} alt="Minecraft Game" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">A</Card.Title>
                  <Card.Text className="text-left">Game kotak-kotak</Card.Text>
                  <Card.Text className="text-left">Last Updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="gameImage">
              <Image src={farCryImage} alt="Far Cry Game" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">A</Card.Title>
                  <Card.Text className="text-left">Game kotak-kotak</Card.Text>
                  <Card.Text className="text-left">Last Updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="gameImage">
              <Image src={lolImage} alt="LOL Game" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">A</Card.Title>
                  <Card.Text className="text-left">Game kotak-kotak</Card.Text>
                  <Card.Text className="text-left">Last Updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="gameImage">
              <Image src={olliwoorldImage} alt="olliwoorld Game" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">A</Card.Title>
                  <Card.Text className="text-left">Game kotak-kotak</Card.Text>
                  <Card.Text className="text-left">Last Updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="gameImage">
              <Image src={valorantImage} alt="Valorant Game" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">A</Card.Title>
                  <Card.Text className="text-left">Game bikin stress</Card.Text>
                  <Card.Text className="text-left">Last Updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="gameImage">
              <Image src={wowImage} alt="WoW Game" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">A</Card.Title>
                  <Card.Text className="text-left">Game kotak-kotak</Card.Text>
                  <Card.Text className="text-left">Last Updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TrendingGame

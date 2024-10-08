import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useState } from "react";

const PlayerCard = (player) => {
  const { img, name, statistics } = player;
  const [showImage, setShowImage] = useState(true);
  return (
    <div>
      <Col>
        <Card onClick={()=>setShowImage(!showImage)} className="player-card" role="button">
          {showImage ? (
            <Card.Img variant="top" src={img} height="350px" />
          ) : (
            <ul className="my-auto">
              {statistics.map((item, i) => (
                <li className="list-unstyled h5 text-start" key={i}>
                  {" "}
                  🏀{item}
                </li>
              ))}
            </ul>
          )}
          <Card.Footer>
            <Card.Title>{name}</Card.Title>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
};

export default PlayerCard;

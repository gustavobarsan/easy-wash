import { getDistance } from "geolib";

import { Container } from "./style";
import { useHistory } from "react-router-dom";
import { AiFillStar, AiOutlineClockCircle } from "react-icons/ai";
import { FaMotorcycle } from "react-icons/fa";
import { useState, useEffect } from "react";

const LaundryCard = ({
  name,
  address,
  schedule,
  deliveryFee,
  src,
  id,
  userCoordinates,
}) => {
  const [score] = useState(((Math.random() * 20) / 10 + 3).toFixed(1));
  const history = useHistory();
  const [distance, setDistance] = useState("Distância indisponível");

  const getCoordDistance = () => {
    try {
      let coorddDistance = getDistance(address.coords, userCoordinates);
      coorddDistance = Math.round(coorddDistance / 100);
      coorddDistance = (coorddDistance / 10).toFixed(1);
      return coorddDistance;
    } catch (err) {}
  };

  useEffect(() => {
    setDistance(getCoordDistance());
  }, [userCoordinates]);

  const handleGoToLaundry = () => {
    history.push(`/services/${id}`);
  };
  return (
    <Container
      data-testid="LaundryCard"
      src={src}
      className="laundryCard_container"
      onClick={handleGoToLaundry}
    >
      <div className="laundryCard_image_container">
        <div className="laundryCard_image"></div>
      </div>

      <div className="laundryCard_content">
        <div className="laundryCard_content_title">{name}</div>
        <div className="laundryCard_content_score">
          <span className="score">
            {score}
            <AiFillStar />
          </span>
          <span>
            {distance && !isNaN(distance)
              ? `${distance}KM`
              : "Distância indisponível"}
          </span>
        </div>
        <div className="laundryCard_content_price">
          <span className="icon">
            <AiOutlineClockCircle /> &nbsp;
            {`${schedule.initial} - ${schedule.end}`}
          </span>
          <span className="icon">
            <FaMotorcycle /> &nbsp; R${deliveryFee}
          </span>
        </div>
      </div>
    </Container>
  );
};

export default LaundryCard;

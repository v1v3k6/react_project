import React from "react";
import { Button } from "react-bootstrap";
import "./styles.scss";

class CreateCards extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      name = "",
      type = "",
      image = "",
      description,
      price,
      id,
      isFood
    } = this.props;
    return (
      <div className="card-container w-100 p-1 rounded d-flex flex-wrap justify-content-center" key={id}>
        <img className="p-1 custom-image-size w-100" src={image} alt={name} />
        <div className="card-title text-center w-100">{name}</div>
        <div className="card-text text-center w-100">{type}</div>
        {isFood ? (
          <>
            <div className="card-text text-center w-100">Price: INR {price}</div>
            <div className="card-text text-center w-100">{description}</div>
            <div className="card-text w-100 d-flex justify-content-between">
              <Button>Add to cart</Button>
              <Button disabled={true} >Remove from cart</Button>
            </div>
          </>
        ) : (
            ""
          )}
      </div>
    );
  }
}

export default CreateCards;
export { CreateCards };

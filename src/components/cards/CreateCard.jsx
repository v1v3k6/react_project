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
      <div className="card-container w-100" key={id}>
        <img className="p-1 custom-image-size w-100" src={image} alt={name} />
        <div className="card-title">{name}</div>
        <div className="card-text">{type}</div>
        {isFood ? (
          <>
            <div className="card-text">{price}</div>
            <div className="card-text">{description}</div>
            <Button>Add to cart</Button>
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

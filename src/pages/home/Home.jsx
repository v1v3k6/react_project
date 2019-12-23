import React from "react";
import CreateCard from "src/components/cards";
import dataObject from "lds/hotel_data";
import { Link } from "react-router-dom";
import "./styles.scss";

class Home extends React.Component {
  constructor(props){
    super(props)
    this.props.initialLoaderCheck(true)
  }
  render() {
    return (
      <div className="d-flex justify-content-start flex-wrap w-100">
        {dataObject.hotels.map((data, index) => {
          return (
            <Link
              to={`/foodlist/?id=${data.id}`}
              className="card mt-1 ml-1 card-dark rounded card-parent"
              key={index}
            >
              <CreateCard
                {...{
                  name: data.name,
                  type: data.type,
                  image: data.image,
                  key: data.name + "_" + index,
                  isFood: false
                }}
              />
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Home;
export { Home };

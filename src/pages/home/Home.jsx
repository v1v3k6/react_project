import React from "react";
import CreateCard from "src/components/cards";
import dataObject from "lds/hotel_data";
import "./styles.scss";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-start flex-wrap w-100">
        {dataObject.hotels.map((data, index) => {
          return (
            <Link
              to={`/Foodlist:${data.name.replace(/ /g,'')}`}
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

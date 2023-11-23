/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { CardStyle } from "../styles/components/CardStyle";
// import { Fade } from "react-reveal";
export default function Card({ data }) {
  return (
    // <Fade bottom delay={index * 30}>
    <CardStyle>
      <Link to={`/product/${data?.id}`}>
        <div className="img-card">
          <img
            src={data?.image}
            alt={data?.name}
            onError={(e) => {
              e.target.src =
                "https://api.umirov.uz/storage/userdetails/August2023/dcDZk5taPQxTNVIJgmE4.jpg";
              // some replacement image
            }}
          />
        </div>
      </Link>
      <p className="card_name">
        <Link className="card_name_link" to={`/product/${data?.id}`}>
          {data?.name}
        </Link>
      </p>
      <div className="price">
        <div className="price-number">
          {data?.price?.toLocaleString().replace(/,/g, " ")} so'm
        </div>
        <Link to={`/product/${data?.id}`} className="buy">
          <img src="/img/buy.svg" alt="" />
          <span>xarid</span>
        </Link>
      </div>
    </CardStyle>
    // </Fade>
  );
}

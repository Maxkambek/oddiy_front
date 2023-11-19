/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { CardStyle } from "../styles/components/CardStyle";

export default function Card({ data }) {
  return (
    <CardStyle>
      <Link to={"/product/1"}>
        <div className="img-card">
          <img
            src=""
            alt=""
            onError={(e) => {
              e.target.src =
                "https://api.umirov.uz/storage/userdetails/August2023/dcDZk5taPQxTNVIJgmE4.jpg";
              // some replacement image
            }}
          />
        </div>
        <p>
          {data?.name} {" " + data?.id}
        </p>
        <div className="price">
          <div className="price-number">{data?.price} so'm</div>
          <div className="buy">
            <img src="/img/buy.svg" alt="" />
            <span>xarid</span>
          </div>
        </div>
      </Link>
    </CardStyle>
  );
}

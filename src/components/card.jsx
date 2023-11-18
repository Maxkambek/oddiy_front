/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { CardStyle } from "../styles/components/CardStyle";

export default function Card({ data }) {
  return (
    <CardStyle>
      <img
        src=""
        alt=""
        className="img-card"
        onError={(e) => {
          e.target.src =
            "https://api.umirov.uz/storage/userdetails/August2023/dcDZk5taPQxTNVIJgmE4.jpg";
          // some replacement image
        }}
      />
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
    </CardStyle>
  );
}

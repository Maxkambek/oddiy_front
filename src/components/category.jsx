import { Link } from "react-router-dom";
import { CategoryStyle } from "../styles/components/CategoryStyle";

import { Zoom } from "react-reveal";

/* eslint-disable react/prop-types */
export default function Category({ data, index }) {
  return (
    <Zoom cascade delay={index * 200}>
      <CategoryStyle bg={data?.bg} marginr={data?.marginr}>
        <Link to={`category/${data?.slug}`}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={data?.img} alt="" />
          </div>
          <p>{data?.name}</p>
        </Link>
      </CategoryStyle>
    </Zoom>
  );
}

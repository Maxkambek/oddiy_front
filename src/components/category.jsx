import { Link } from "react-router-dom";
import { CategoryStyle } from "../styles/components/CategoryStyle";

/* eslint-disable react/prop-types */
export default function Category({ data }) {
  return (
    <CategoryStyle bg={data?.bg} marginR={data?.margiR}>
      <Link to={data?.link}>
        <img src="" alt="" />
        <p>{data?.name}</p>
      </Link>
    </CategoryStyle>
  );
}

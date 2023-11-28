import { useEffect, useState } from "react";
import Axios from "../utils/httpClinet";

const Requests = () => {
  const [requests, setRequests] = useState([]);

  const getRequests = () => {
    Axios()
      .get("/customers/requests-list/")
      .then((res) => {
        setRequests(res.data);
      });
  };

  useEffect(() => {
    getRequests();
  }, []);
  return (
    <div className="Requests">
      <div className="row">
        <div className="col-12 flow_stat_header">So‘rovlar:</div>
        <div className="col-12 table_header">
          <div className="table_h_item">ID</div>
          <div className="table_h_item">Mahsulot</div>
          <div className="table_h_item">Buyurtma</div>
          <div className="table_h_item">Manzil</div>
          <div className="table_h_item">Holat</div>
          <div className="table_h_item">Izoh</div>
          <div className="table_h_item">Sana</div>
          <div className="table_h_item">Oqim</div>
        </div>
        {requests?.map((item, index) => (
          <>
            <div key={index} className="col-12 table_p">
              <div className="table_h_item">{item.id}</div>
              <div className="table_p_item">{item.product.name}</div>
              <div className="table_p_item">{item.order_phone}</div>
              <div className="table_p_item ">{item.address}</div>
              <div className="table_p_item">
                <div className="status_btn">{item.status}</div>
              </div>
              <div className="table_p_item">{item.description}</div>
              <div className="table_p_item">{item.created_at.slice(0, 10)}</div>
              <div className="table_p_item">{item.flow?.name}</div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Requests;

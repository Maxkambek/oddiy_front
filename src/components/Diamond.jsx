import { useEffect, useState } from "react";
import Axios from "../utils/httpClinet";

const Diamond = () => {
  const [diamond, setDiamond] = useState([]);

  const getRequests = () => {
    Axios()
      .get("/customers/diamond-list/")
      .then((res) => {
        setDiamond(res.data);
      });
  };

  useEffect(() => {
    getRequests();
  }, []);

  return (
    <div className="Diamond">
      <div className="row">
        <div className="col-12 mb-4">
          <div className="diamond_box">
            <div className="diamond_header">Ayirboshlash #</div>
            <div className="diamond_p">
              To‘plagan olmoslaringizni asosiy balansingizga o‘tkazib olishingiz
              mumkin!
            </div>
            <div className="diamond_input_box">
              <div className="input_label">Olmoslar</div>
              <input type="text" />
            </div>
            <div className="diamond_btn">Tasdiqlash</div>
          </div>
        </div>
        
        <div className="col-12 mb-2">
          <div className="diamond_list_box">
            <div className="list_item_h">№</div>
            <div className="list_item_h">Sotuvchi</div>
            <div className="list_item_h">Olmos</div>
          </div>
        </div>

        {diamond?.map((item, index) => (
          <>
            <div key={index} className="col-12 mb-2">
              <div className="diamond_list_box">
                <div className="list_item">{item.id}</div>
                <div className="list_item">
                  {item.name ? item.name : "user"}
                </div>
                <div className="list_item">{item.count}</div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Diamond;

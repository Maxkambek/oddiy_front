import { useEffect, useState } from "react";
import Axios from "../utils/httpClinet";

const Flow = () => {
  const [flow, setFlow] = useState([]);

  const getFlow = () => {
    Axios()
      .get("/customers/flow-list/")
      .then((res) => {
        setFlow(res?.data);
      });
  };

  useEffect(() => {
    getFlow();
  }, []);

  return (
    <div className="Flow">
      <div className="row">
        <div className="col-12">
          <div className="flow_header">Mening yaratgan oqimlarim</div>
        </div>
        {flow?.map((item, index) => (
          <>
            <div key={index} className="col-lg-4 col-md-6 mb-3">
              <div className="flow_box">
                <div className="flow_h">{item.name}</div>
                <div className="flow_description">
                  {"Ko'rishlar soni:"} {item.views}
                </div>
                <div className="skidki">
                  Chegirma: {item.discount_for_flow} so‘m
                </div>
                <div className="delivery">Bepul yetkazish: -</div>
                <div className="flow_link">https://odiy.uz/oqim/{item.id}</div>
                <div className="for_border"></div>
                <div className="flow_btn">Nusxalash</div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Flow;

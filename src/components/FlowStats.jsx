import { useEffect, useState } from "react";
import Axios from "../utils/httpClinet";

const FlowStats = () => {
  const [stats, setStats] = useState();

  const getStats = () => {
    Axios()
      .get("/customers/flow-statistics/")
      .then((res) => {
        setStats(res.data);
        console.log(res.data);
      });
  };

  useEffect(() => {
    getStats();
  }, []);

  return (
    <div className="FlowStat">
      <div className="row">
        <div className="col-12 flow_stat_header">Oqimlar statistikasi:</div>
        <div className="col-12 table_header">
          <div className="table_h_item">Oqim:</div>
          <div className="table_h_item">Tashrif:</div>
          <div className="table_h_item">Yangi:</div>
          <div className="table_h_item">Qabul qilindi:</div>
          <div className="table_h_item">Yetkazilmoqda:</div>
          <div className="table_h_item">Yetkazib berildi:</div>
          <div className="table_h_item">Qayta qo‘ng’iroq:</div>
          <div className="table_h_item">Qaytib keldi:</div>
          <div className="table_h_item">Arxivlandi:</div>
        </div>
        {stats ? (
          <>
            {stats.map((item, index) => (
              <>
                <div key={index} className="col-12 table_p">
                  <div className="table_h_item">{item.name}</div>
                  <div className="table_p_item">{item.views}</div>
                  <div className="table_p_item">{item.yang}</div>
                  <div className="table_p_item">{item.qabul_qilindi}</div>
                  <div className="table_p_item">{item.yetqazilmoqda}</div>
                  <div className="table_p_item">{item.yetqazib_berildi}</div>
                  <div className="table_p_item">{item.qayta_qongiroq}</div>
                  <div className="table_p_item">{item.qaytib_keldi}</div>
                  <div className="table_p_item">{item.arxivlandi}</div>
                </div>
              </>
            ))}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default FlowStats;

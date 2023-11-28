import { useNavigate } from "react-router-dom";

const AdminMain = () => {
  const nav = useNavigate();

  return (
    <div className="AdminMain">
      <div className="admin_main_box">
        <div className="for_green_back_1"></div>
        <div className="admin_main_img">
          <img src="img/user_kotta.png" alt="" />
        </div>
        <div className="for_green_back_2">
          <div className="user_infos">
            <div className="admin_phone">998330013441</div>
            <div className="admin_hisob">Hisobingiz: 0 so‘m</div>
            <div className="admin_register_date">
              Ro‘yxatdan o‘tgan sanangiz: 8-Noyabr, 2023-yil 23:40
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-lg-4 col-md-6 mb-4">
          <div onClick={() => nav("/product")} className="admin_link_box">
            <img src="img/tovor1.svg" alt="" />
            <div className="link_name">Tovarlar</div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div onClick={() => nav("/flow")} className="admin_link_box">
            <img src="img/oqim1.svg" alt="" />
            <div className="link_name">Oqimlar</div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div
            onClick={() => nav("/flow-statistics")}
            className="admin_link_box"
          >
            <img src="img/stat1.svg" alt="" />
            <div className="link_name">Statistika</div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div onClick={() => nav("/payment")} className="admin_link_box">
            <img src="img/tolov1.svg" alt="" />
            <div className="link_name">To‘lovlar</div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div onClick={() => nav("/requests")} className="admin_link_box">
            <img src="img/sorov1.svg" alt="" />
            <div className="link_name">So‘rovlar</div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div onClick={() => nav("/diamond")} className="admin_link_box">
            <img src="img/olmos1.svg" alt="" />
            <div className="link_name">Olmoslar</div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div onClick={() => nav("/settings")} className="admin_link_box">
            <img src="img/kluch1.svg" alt="" />
            <div className="link_name">Sozlamalar</div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div onClick={() => nav("/admin")} className="admin_link_box">
            <img src="img/yulduz1.svg" alt="" />
            <div className="link_name">Konkurs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMain;

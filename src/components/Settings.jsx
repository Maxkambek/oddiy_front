import { useState } from "react";
import Axios from "../utils/httpClinet";

const Settings = () => {
  const [name, setName] = useState();
  const [telegram, setTelegram] = useState();
  const patchUser = () => {
    Axios()
      .patch("/user/user-rud/", { name: name, telegram_id: telegram })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div className="Settings">
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

      <div className="row">
        <div className="col-lg-9">
          <form onSubmit={patchUser} action="">
            <div className="setting_box">
              <div className="setting_box_h">Sozlamalar</div>
              <div className="settings_input_box">
                <div className="settings_input">
                  <div className="input_label">Ismingiz</div>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Ismingizni kiriting"
                  />
                </div>
                <div className="settings_input">
                  <div className="input_label">Telegram raqamingiz</div>
                  <input
                    required
                    value={telegram}
                    onChange={(e) => setTelegram(e.target.value)}
                    type="text"
                    placeholder="Telegram raqamingizni kiriting"
                  />
                </div>
              </div>
              <div className="settings_btn_box">
                <button type="submit" className="settings_save_btn">
                  Saqlash
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;

const Payment = () => {
  return (
    <div className="Payment">
      <div className="col-12">
        <div className="payment_header">Pul yechish:</div>
      </div>
      <div className="col-12">
        <div className="payment_main_box">
          <div className="main_box_1">
            <img src="img/user_payment.svg" alt="" />
            <div className="balans_box">
              <div className="balans_box_label">Balansingiz:</div>
              <div className="balans_box_label">925,000</div>
              <div className="balans_box_phone">998330013441</div>
              <div className="balans_box_id">ID raqamingiz: 27</div>
            </div>
          </div>
          <div className="main_box_2">
            <div className="input_label">Karta raqami:</div>
            <input
              className="my_input"
              type="text"
              placeholder="Karta raqamingizni kiriting"
            />
            <div className="input_label">Summa</div>
            <input
              className="my_input"
              type="text"
              placeholder="Summani kiriting"
            />
            <div className="pay_checkbox">
              <input type="checkbox" />
              <div className="checkbox_label">Karta raqamini eslab qolish</div>
            </div>
            <div className="pay_confirm_btn">Tasdiqlash</div>
          </div>
          <div className="main_box_3">
            <div className="payment_list_box mb-3">
              <div className="list_item_h">Hisob raqam</div>
              <div className="list_item_h">Sana</div>
              <div className="list_item_h">Sana</div>
              <div className="list_item_h">Holat</div>
            </div>
            <div className="payment_list_box_1 mb-2">
              <div className="list_item">karta raqam</div>
              <div className="list_item">0</div>
              <div className="list_item">0</div>
              <div className="list_item">
                <div className="holat_btn">To‘lab berildi</div>
              </div>
            </div>
            <div className="payment_list_box_1 mb-2">
              <div className="list_item">karta raqam</div>
              <div className="list_item">0</div>
              <div className="list_item">0</div>
              <div className="list_item">
                <div className="holat_btn">To‘lab berildi</div>
              </div>
            </div>
          </div>
          <div className="main_box_4">
            <div className="payment_history_btn">
              To‘lab berilgan: 000000 so‘m
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

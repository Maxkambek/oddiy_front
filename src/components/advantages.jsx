import { AdvantagesStyle } from "../styles/components/Advantages";

export default function Advantages() {
  const advantages = [
    {
      id: 1,
      img: "/img/advantage_1.svg",
      title: "Oldindan to‘lovsiz",
      desc: "To‘lovni qo‘lga olganda to‘lash",
    },
    {
      id: 2,
      img: "/img/advantage_2.svg",
      title: "To‘lov usullari",
      desc: "To‘lovni Naqt pul yoki bank karta orqali to‘lash",
    },
    {
      id: 3,
      img: "/img/advantage_3.svg",
      title: "Hamyonbop narx",
      desc: "Doimiy chegirmalar",
    },
    {
      id: 4,
      img: "/img/advantage_4.svg",
      title: "Keng assortiment",
      desc: "Ehtiyojingiz uchun kerakli mahsulotlar",
    },
    {
      id: 5,
      img: "/img/advantage_5.svg",
      title: "Qo‘llab-quvvatlash",
      desc: "Dam olish kunlarisiz qo‘llab-quvvatlash",
    },
  ];
  return (
    <AdvantagesStyle>
      {advantages.map((item, i) => {
        return (
          <div className="advantages-items" key={i + "asas"}>
            <img src={item?.img} alt="" />
            <div className="texts">
              <div className="title">{item?.title}</div>
              <div className="desc">{item?.desc}</div>
            </div>
          </div>
        );
      })}
    </AdvantagesStyle>
  );
}

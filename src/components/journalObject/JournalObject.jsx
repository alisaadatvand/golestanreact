import JournalObjectCss from "./JournalObject.module.css";
import pasta from "../../images/journal/pasta.jpg";
import soup from "../../images/journal/soup.jpg";
import chila from "../../images/journal/vegetables.jpg";

const JournalObject = () => {
  return (
    <>
      <div className={JournalObjectCss.journalObject}>
        <div className={JournalObjectCss.object}>
          <div className={JournalObjectCss.image}>
            <a href="#">
              <img src={pasta} alt="pasta" />
            </a>
          </div>
          <div className={JournalObjectCss.detail}>
            <h1>ماکارونی با سبزیجات</h1>
            <p>
              ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌
              می‌ریزیم‌ تا کمی‌ بپزد. در این‌ حین‌ پیازها را خرد کرده‌ و روی‌
              روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…
            </p>
            <div className={JournalObjectCss.button}>
              <a href="#">ادامه مطلب</a>
            </div>
          </div>
        </div>
        <div className={JournalObjectCss.object}>
          <div className={JournalObjectCss.image}>
            <a href="#">
              <img src={soup} alt="soup" />
            </a>
          </div>
          <div className={JournalObjectCss.detail}>
            <h1>سوپ مکزیکی</h1>
            <p>
              گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی
              آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع آن
              بیرون آورده…
            </p>
            <div className={JournalObjectCss.button}>
              <a href="#">ادامه مطلب</a>
            </div>
          </div>
        </div>
        <div className={JournalObjectCss.object}>
          <div className={JournalObjectCss.image}>
            <a href="#">
              <img src={chila} alt="chila" />
            </a>
          </div>
          <div className={JournalObjectCss.detail}>
            <h1>چیلاکلیه</h1>
            <p>
              احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای
              فوق‌العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدانشدنی از
              فهرست
            </p>
            <div className={JournalObjectCss.button}>
              <a href="#">ادامه مطلب</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JournalObject;

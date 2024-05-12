import mainImg from "../../images/main/tea-pic1.png";
import main from "./Main.module.css";

const Main = () => {
  return (
    <>
      <div className={main.main}>
        <div className={main.right}>
          <h1>چای گلستان</h1>
          <h3>حرفه ای در طعم</h3>
          <p>
            هر یک از مصرف‌کنندگان محصولات چای و ناتس گلستان می‌توانند با ارسال
            کد قرعه کشی روی بسته به شماره 30007405 در قرعه کشی‌های بعدی شرکت
            کنند​.
          </p>
          <div className={main.more}>
            <a href="#">اطلاعات بیشتر</a>
          </div>
        </div>
        <div className={main.left}>
          <img src={mainImg} alt="main" />
        </div>
      </div>
    </>
  );
};

export default Main;

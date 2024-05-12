import FooterCss from "./Footer.module.css";
import FooteImg1 from "../../images/footer/tea.png";
import FooteImg2 from "../../images/footer/tea bag.png";
import FooteImg3 from "../../images/footer/footer-icon2.png";
import FooteImg4 from "../../images/footer/footer-icon3.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={FooterCss.red}></div>
        <div className={FooterCss.middle}>
          <div>
            <div className={FooterCss.footerimg}>
              <img src={FooteImg1} alt="footer" />
            </div>
            <hr />
            <h1>چای گلستان</h1>
            <hr className={FooterCss.hr}/>
            <a href="#">چای ممتاز هندوستان</a>
            <a href="#">چای ممتاز ارل گری</a>
            <a href="#">چای سیلان عطری</a>
            <a href="#">چای ممتاز سیلان</a>
            <a href="#">چای صبحانه گلستان</a>
          </div>
          <div>
            <div className={FooterCss.footerimg}>
              <img src={FooteImg2} alt="footer" />
            </div>
            <hr />
            <h1>تی بگ گلستان</h1>
            <hr className={FooterCss.hr}/>
            <a href="#">تی بگ بلک لاین</a>
            <a href="#">تی بگ ارل گری</a>
            <a href="#">دمنوش نعناع</a>
            <a href="#">دمنوش بابونه</a>
            <a href="#">دمنوش چای سبز</a>
          </div>
          <div>
            <div className={FooterCss.footerimg}>
              <img src={FooteImg3} alt="footer" />
            </div>
            <hr />
            <h1>ادویه گلستان</h1>
            <hr className={FooterCss.hr}/>
            <a href="#">زعفران ممتاز خراسان</a>
            <a href="#">ادویه کاری</a>
            <a href="#">ادویه ماست و خیار</a>
            <a href="#">فلفل سیاه خالص</a>
            <a href="#">زردچوبه ممتاز</a>
          </div>
          <div>
            <div className={FooterCss.footerimg}>
              <img src={FooteImg4} alt="footer" />
            </div>
            <hr />
            <h1>حبوبات گلستان</h1>
            <hr className={FooterCss.hr}/>
            <a href="#">لوبیا قرمز ممتاز</a>
            <a href="#">لوبیا چیتی گلستان</a>
            <a href="#">عدس کانادایی</a>
            <a href="#">نخود زودپز کرمانشاه</a>
            <a href="#">لوبیا سفید گلستان</a>
          </div>
        </div>
        <div className={FooterCss.bottom}>
          <div className={FooterCss.copy}>
            <h1>All Right Reserved Golestan Company 2022-2025</h1>
            <h3>Design By: Ali saadatvand</h3>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import MoviesCss from "./Movies.module.css";
import nodel from "../../videos/nodel.mp4";
import instagram from "../../videos/instagram.mp4";
import riceMovie from "../../videos/rice.mp4";

const Movies = () => {
  return (
    <>
      <div className={MoviesCss.movies}>
        <div className={MoviesCss.movieobject}>
          <div className={MoviesCss.movie}>
            <video src={nodel} controls></video>
          </div>
          <div className={MoviesCss.detail}>
            <h1>سالاد نودل</h1>
            <p>
              نودل هاتی کارا یك میان‌وعده‌ی مغذی، در هر موقعیتی كه باشید با كمی
              آب جوش و یك نودل هاتی‌كارا می‌توانید از یك غذای سالم و خوشمزه لذت
              ببرید.
            </p>
            <div className={MoviesCss.button}>
              <a href="#">ویدیوهای بیشتر</a>
            </div>
          </div>
        </div>
        <div className={MoviesCss.movieobject}>
          <div className={MoviesCss.movie}>
            <video src={instagram} controls></video>
          </div>
          <div className={MoviesCss.detail}>
            <h1>اینستاگرام هاتی نودل</h1>
            <p>
              نودل‌های هاتی كارا را می‌توان جایگزین سالمی برای غذاهای فست‌فودی
              دانست. طعم عالی،‌ ارزش غذایی بالا و قیمت مناسب از این محصول غذای
              سالم و كاملی ساخته است.
            </p>
            <div className={MoviesCss.button}>
              <a href="#">ادامه مطلب</a>
            </div>
          </div>
        </div>
        <div className={MoviesCss.movieobject}>
          <div className={MoviesCss.movie}>
            <video src={riceMovie} controls></video>
          </div>
          <div className={MoviesCss.detail}>
            <h1>برنج گلستان</h1>
            <p>
              عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست.
              با گلستان،‌ كیفیت زندگی بالاتر از همیشه است. چرا كه مشتریان
              گلستان؛‌ لایق بهترین ها هستند.
            </p>
            <div className={MoviesCss.button}>
              <a href="#">مشاهده محصولات</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;

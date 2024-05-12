import RessocialCss from "./Ressocial.module.css";

const Ressocial = () => {
  return (
    <>
      <div className={RessocialCss.ressocial}>
        <div className={RessocialCss.text}>
          <h1>مسئوليت های اجتماعی گلستان</h1>
          <p>
            كسب‌وكارها اجزای قدرتمند جامعه به شمار می‌آیند و موفق‌ترین،
            قابل‌احترام‌ترین و مطلوب‌ترین كسب‌وكارها آنهایی هستند كه كاری فراتر
            از درآمدزایی ایجاد كنند؛‌ آنهایی كه آمده‌اند تا از تجربه و امکانات
            شان برای حل مشكلات جامعه و محیط زندگی خود استفاده كنند. گلستان در
            فعالیت‌های‌ اجتماعی خود،‌ گسترده وسیعی از فعالیت‌های عام‌المنفعه را
            در دستوركار خود قرار داده است.
          </p>

          <div className={RessocialCss.butt1}>
            <a href="#">اطلاعات بیشتر</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ressocial;

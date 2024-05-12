import MainImageCss from "./MainImage.module.css";
import bigImage from "../../images/bigImage/image4-new.jpg";

const MainImage1 = () => {
  return (
    <>
      <div className={MainImageCss.mainImage}>
        <img src={bigImage} alt="mainImage" />
        <div className={MainImageCss.textMainImage}>
          <h1>پسته گلستان</h1>
          <span>معرفی محصول</span>
        </div>
      </div>
    </>
  );
};

export default MainImage1;

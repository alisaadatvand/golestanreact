import MainImageCss from "./MainImage.module.css";
import bigImage from "../../images/bigImage/image2-new-1.jpg";

const MainImage1 = () => {
    return ( <>
        <div className={MainImageCss.mainImage}>
        <img src={bigImage} alt="mainImage"/>
        <div className={MainImageCss.textMainImage}>
            <h1>برنج گلستان</h1>
            <span>معرفی محصول</span>
        </div>
    </div>
    </> );
}
 
export default MainImage1;
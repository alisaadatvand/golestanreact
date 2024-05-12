import logo from "../../images/logo.png";
import menu from "./Menu.module.css";

const Menu = () => {
    return ( <>
            <header>
        <div className={menu.logo}>
            <img src={logo} alt="logo"/>
        </div>
        <nav>
            <ul>
                <li ><a className={menu.default} href="#"> صفحه اصلی</a></li> 
                <li><a href="#"> شرکت گلستان</a>
                    <div>
                        <a href="#">معرفی شرکت</a>
                        <a href="#">تاریخچه گلستان</a>
                        <a href="#">اخبار و اطلاعیه ها</a>
                        <a href="#">مسیولیت های اجتماعی</a>
                        <a href="#">سازمان فروش</a>
                        <a href="#">سازمان توزیع</a>
                        <a href="#">برندها</a>
                    </div>
                </li>
                <li><a href="#">محصولات</a>
                    <div>
                        <a href="#">چای</a>
                        <a href="#">ناتس</a>
                        <a href="#">ادویه و چاشنی</a>
                        <a href="#">برنج</a>
                        <a href="#">زعفران و زرشک</a>
                        <a href="#">دمنوش</a>
                        <a href="#">حبوبات و غلات</a>
                        <a href="#">قند و شکر</a>
                        <a href="#">هاتی نودل</a>
                        <a href="#">سایر محصولات</a>
                        <a href="#">گل کیس</a>
                    </div>
                </li>
                <li><a href="#">وبلاگ</a>
                    <div>
                        <a href="#">مجله گلستان</a>
                        <a href="#">فرهنگ غذایی</a>
                        <a href="#">سلامت غذایی</a>
                        <a href="#">تاریخچه</a>
                        <a href="#">میزبانی و دیزاین</a>
                    </div>
                </li>
                <li><a href="#">قرعه کشی</a></li>
                <li><a href="#">استخدام</a></li>
                <li><a href="#">تماس با ما</a>
                    <div>
                        <a href="#">دفتر مرکزی</a>
                        <a href="#">صدای مصرف کنندگان</a>
                        <a href="#">ارتباط با مشترکین</a>
                    </div>
                </li>
                <li><a href="#">EN</a></li>
            </ul>
        </nav>
    </header>
    </> );
}
 
export default Menu;
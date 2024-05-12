import Introduction from "./Introduction.module.css";
import humanImg from "../../images/details/human.png";
import centersImg from "../../images/details/centers.png";
import productImg from "../../images/details/product.png";
import customersImg from "../../images/details/customers.png";

const Introductions = () => {
    return ( <>
            <div className={Introduction.IntroductionMain}>
        <div className={Introduction.Introduction}>
            <h1>معرفی گلستان</h1>
            <p>آنچه که امروز با نام مجموعه گلستان می‌شناسیم در سال 1329 بنیان نهاده شد. زمانی که شرکت گلستان فعالیت خود را با بسته‌بندی و توزیع چای پاکتی آغاز کرد. با گذر زمان و رشد اقتصاد کشور، نهال «گلستان» به تدریج تقویت شد و شاخ و برگ گرفت. فعالیت‌های «گلستان» با تهیه، تولید و بسته‌بندی بهترین محصولات غذایی گسترش پیدا کرد. گلستان پس از سال ها تلاش، همچنان می کوشد تا به کمک تجربیات اندوخته شده در این سال ها کالاهایی قابل اعتماد و با کیفیت تولید نماید</p>
            <p>هدفمندی و برنامه ریزی موثر، ایمان و عزم راسخ برای دستیابی به اهداف تعیین شده، به کار گیری همکاران مجرب و دلسوز، استفاده از روش های نوین بازاریابی و مشتری محوری از جمله عوامل مهم در استراتژی شرکت گلستان می باشد.</p>
        </div>
        <div className={Introduction.products}>
            <h1>محصولات گلستان</h1>
            <p>نام تجاری گلستان قدمتی به اندازه عمر شرکت گلستان دارد. گلستان ممتاز ترین محصولات خود را با این نام تجاری عرضه می کند . مصرف کنندگان محصولات گلستان همواره از این نام تجاری خاطره محصولاتی ممتاز و منحصر بفرد دارند و با اطمینان از نهایت کیفیت از این نام تجاری حمایت می کنند .</p>
        </div>
        <div className={Introduction.detail}>

            <div className={Introduction.detailObject}>
                <div className={Introduction.img}>
                    <img src={humanImg} alt="details"/>
                </div>
                <div className={Introduction.title}>
                    <span>سرمایه انسانی</span>
                </div>
            </div>

            <div className={Introduction.detailObject}>
                <div className={Introduction.img}>
                    <img src={centersImg} alt="details"/>
                </div>
                <div className={Introduction.title}>
                    <span>مراکز فروش</span>
                </div>
            </div>

            <div className={Introduction.detailObject}>
                <div className={Introduction.img}>
                    <img src={productImg} alt="details"/>
                </div>
                <div className={Introduction.title}>
                    <span>محصولات گلستان</span>
                </div>
            </div>

            <div className={Introduction.detailObject}>
                <div className={Introduction.img}>
                    <img src={customersImg} alt="details"/>
                </div>
                <div className={Introduction.title}>
                    <span>مشتریان گلستان</span>
                </div>
            </div>
        </div>
    </div>
    </> );
}
 
export default Introductions;
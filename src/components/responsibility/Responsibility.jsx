import ResponsibilityCss from "./Responsibility.module.css";
import responsibilityImg from "../../images/responsibility/hospital.jpg";

const Responsibility = () => {
  return (
    <>
      <div className={ResponsibilityCss.responsibility}>
        <div>
          <h3>مسئوليت های اجتماعی شركت گلستان</h3>
          <hr />
          <h1>Golestan Social Responsibility</h1>
          <h5>Mahdi Hospital</h5>
        </div>
        <div className={ResponsibilityCss.hospital}>
          <img
            src={responsibilityImg}
            alt="responsibility"
          />
        </div>
      </div>
    </>
  );
};

export default Responsibility;

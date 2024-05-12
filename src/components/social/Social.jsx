import SocialCss from "./Social.module.css";
import facebook from "../../images/social/facebook.png";
import linkedin from "../../images/social/linkedin.png";
import insta from "../../images/social/instagram.png";
import telegram from "../../images/social/telegram.png";

const Social = () => {
  return (
    <>
      <div className={SocialCss.social}>
        <div>
          <a href="#">
            <img src={facebook} alt="facebook" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={insta} alt="insta" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={telegram} alt="telegram" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Social;

import Menu from "./menu/Menu";
import Main from "./main/Main";
import Introductions from "./introduction/Introductions";
import MainImge1 from "./mainImage/MainImage1";
import Rice from "./Items/Rice";
import MainImage2 from "./mainImage/MainImage2";
import Tea from "./Items/Tea";
import MainImage3 from "./mainImage/MainImage3";
import Pistachio from "./Items/Pistachio";
import FixBox from "./fixBox/FixBox";
import Journal from "./journal/Journal";
import JournalObject from "./journalObject/JournalObject";
import Movies from "./films/Movies";
import Responsibility from "./responsibility/Responsibility";
import Ressocial from "./ressocial/Ressocial";
import Social from "./social/Social";
import Footer from "./footer/Footer";

const App = () => {
  return (
    <>
      <Menu />
      <Main />
      <Introductions />
      <MainImge1 />
      <Rice />
      <MainImage2 />
      <Tea />
      <MainImage3 />
      <Pistachio />
      <FixBox />
      <Journal />
      <JournalObject />
      <Movies />
      <Responsibility />
      <Ressocial />
      <Social />
      <Footer/>
    </>
  );
};

export default App;

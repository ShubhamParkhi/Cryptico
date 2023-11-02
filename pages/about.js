import Header from "../components/header";
import MainAbout from "../components/main-about";
import WorkingAbout from "../components/working-about";
import FeaturesAbout from "../components/features-about";
import Footer from "../components/footer";

const About = () => {
  return (
    <div className="[background:linear-gradient(62deg,_rgba(1,_4,_9,_0),_rgba(13,_51,_115,_0.2)),_#010409] w-full flex flex-col items-center justify-center text-text-color">
      <Header />
      <MainAbout />
      <WorkingAbout />
      <FeaturesAbout />
      <Footer />
    </div>
  );
};

export default About;

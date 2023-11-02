import Header from "../components/header";
import IntroductionContact from "../components/introduction-contact";
import ContactC from "../components/contact-contact";
import ContactForm from "../components/contact-form";
import Footer from "../components/footer";

const Contact = () => {
  return (
    <div className="[background:linear-gradient(62deg,_rgba(1,_4,_9,_0),_rgba(13,_51,_115,_0.2)),_#010409] w-full flex flex-col items-center justify-center text-text-color">
      <Header />
      <IntroductionContact />
      <ContactC />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;

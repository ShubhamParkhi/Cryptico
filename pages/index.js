import Header from "../components/header";
import MainHome from "../components/main-home";
import InstructionsHome from "../components/instructions-Home";
import ReassuranceHome from "../components/reassurance-home";
import TransactionHome from "../components/transaction-home";
import ToastContainer from 'react-toastify';
import Footer from "../components/footer";

const Home = () => {
  return (
    <div className="[background:linear-gradient(62deg,_rgba(1,_4,_9,_0),_rgba(13,_51,_115,_0.2)),_#010409] w-full flex flex-col items-center justify-center text-text-color">
      <Header />
      <MainHome />
      <InstructionsHome />
      <ReassuranceHome />
      <TransactionHome />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Home;

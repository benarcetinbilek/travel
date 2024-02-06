import Footer from "../footer/Footer";
import Home from "../home/Home";
import Main from "../main/Main";
import Navbar from "../navbar/Navbar";
import "./initialPage.css";

const InitialPage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Main />
      <Footer />
    </>
  );
};

export default InitialPage;

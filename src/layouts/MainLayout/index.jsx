import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;

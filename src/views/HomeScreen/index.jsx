// components
import MainLayout from "@/layouts/MainLayout";
import Hero from "@/mains/Hero";
import RightBox from "@/mains/RightBox";
import LeftBox from "@/mains/LeftBox";

const HomeScreen = () => (
  <div className="grid-container">
    <MainLayout>
      <Hero />
      <LeftBox />
      <RightBox />
    </MainLayout>
  </div>
);

export default HomeScreen;

// components
import MainLayout from "@/layouts/MainLayout";
import Hero from "@/mains/Hero";
import RightBox from "@/mains/RightBox";
import LeftBox from "@/mains/LeftBox";

const HomeScreen = () => (
  <MainLayout>
    <Hero />
    <LeftBox />
    <RightBox />
  </MainLayout>
);

export default HomeScreen;

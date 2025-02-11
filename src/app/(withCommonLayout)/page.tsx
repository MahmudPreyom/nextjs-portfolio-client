import AboutPage from "./about/page";
import BannerPage from "./banner/page";
import ExperiencePage from "./experience/page";
import ServicesPage from "./services/page";

export default function Home() {
  return (
    <div>
      <BannerPage />
      <AboutPage />
      <ExperiencePage />
      <ServicesPage />
    </div>
  );
}

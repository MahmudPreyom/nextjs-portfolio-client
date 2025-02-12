// import ThemeToggle from "@/components/shared/ThemeToggle";
import AboutPage from "./about/page";
import BannerPage from "./banner/page";
import ExperiencePage from "./experience/page";
import ServicesPage from "./services/page";
import { ThemeProvider } from "@/components/shared/ThemeContext";

export default function Home() {
  return (
    <div className="text-black dark:bg-gray-900 dark:text-white">
      <ThemeProvider>
        {/* <ThemeToggle /> */}
        <BannerPage />
        <AboutPage />
        <ExperiencePage />
        <ServicesPage />
      </ThemeProvider>
    </div>
  );
}

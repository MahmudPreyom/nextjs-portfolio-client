import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const CommonLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default CommonLayout;

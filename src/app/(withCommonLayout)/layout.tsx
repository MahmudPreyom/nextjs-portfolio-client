import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Providers from "@/lib";

const CommonLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Providers>
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </Providers>
  );
};

export default CommonLayout;

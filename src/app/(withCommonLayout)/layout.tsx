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
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </Providers>
  );
};

export default CommonLayout;

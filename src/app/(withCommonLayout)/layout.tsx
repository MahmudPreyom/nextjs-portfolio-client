import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Providers from "@/lib";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const CommonLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await getServerSession(authOptions);
  // const sessions = await get
  return (
    <Providers>
      <Navbar session={session} />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </Providers>
  );
};

export default CommonLayout;

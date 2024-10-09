import Footer from "@/components/life/Footer";
import Navbar from "@/components/life/Navbar";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />
      <div className="relative overflow-hidden">{children}</div>
      <Toaster />
      <Footer />
    </main>
  );
}

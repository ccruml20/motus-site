import "./globals.css";
import "./grain.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-motusBg text-white antialiased">

        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}


import { Poppins, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Footer";

const bodoni = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});
export const metadata = {
  title:
    "BOMBAY CHOC N NUTS | Online Dry Fruits, Dates Ands Imported Chochlates in Pakistan.",
  description:
    "Bombay Choc N Nuts | Online Dry Fruits, Dates Ands Imported Chochlates in Pakistan.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.variable} ${bodoni.variable} font-sans antialiased`}
      >
        <span className="hidden lg:block">
          <Header />
        </span>
        {children}
        <span>
          <Footer />
        </span>
      </body>
    </html>
  );
}

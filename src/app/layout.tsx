import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { openSans } from "@/core/app/ui/fonts";
import NavBar from "./components/NavBar";
import { AiOutlineMail } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yahya's Portfolio",
  description: "Website portfolio diri menggunakan Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${openSans.className}`}>
        <header className={`flex justify-center items-center text-white p-4`} style={{ background: "#222222" }}>
          <NavBar />
        </header>
        <main>{children}</main>
        <footer style={{ background: "#222222" }} className=" text-white text-left py-9 ">
          <div className="w-2/3 mx-auto">
            <h2 id="contact" className="font-bold text-2xl">
              Contact
            </h2>
            <br />
            <p>
              Seasoned Full Stack Software Engineer with over 8 years of hands-on experience in designing and implementing robust, scalable, and innovative web solutions. Adept at leveraging a comprehensive skill set encompassing front-end
              and back-end technologies{" "}
            </p>
            <div className="my-4">
              <Link href={`mailto:yahyasopian5@gmail.com`} className="flex items-center gap-2">
                <AiOutlineMail />
                Yahya Sopian
              </Link>
            </div>
            <div className="flex gap-11">
              <FaInstagram />
              <FaXTwitter />
              <FaYoutube />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

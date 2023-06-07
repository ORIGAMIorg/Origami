import "./globals.css";
import "../styles/antd.min.css";
import { Inter } from "next/font/google";
import { Layout } from "./lib/antd";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Content from "@/components/Content";
import SideNavigation from "@/components/SideNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Origami App",
  description: "For HR professionals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout hasSider>
          <SideNavigation />
          <Layout
            className="site-layout"
            style={{
              marginLeft: 200,
            }}
          >
            <Header />
            <Content>{children}</Content>
            <Footer />
          </Layout>
        </Layout>
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/organisms/Footer";
import Script from "next/script";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://albaniagateway.com/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Wx9coW9tvSLgearsbbTbC0G3nJAUJSBn-n82OXCS3cY"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B0ZGCTMFWE"
        ></Script>
        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-B0ZGCTMFWE');
`}
        </Script>
      </head>

      <body
        className={` ${inter.className} flex flex-col gap-2 justify-center items-center`}
      >
        <Header />
        <main className=" w-full h-full flex  items-center flex-col ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

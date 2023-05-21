import "./globals.css";

import { NavBar, Footer } from "@components";

export const metadata = {
  title: "Car Hub",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <div className='main'>
          <div className='gradient' />
        </div> */}

        {/* <div className='relative z-20'> */}
        <NavBar />
        {children}
        <Footer />
        {/* </div> */}
      </body>
    </html>
  );
}

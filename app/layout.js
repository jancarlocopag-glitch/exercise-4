import { Press_Start_2P } from "next/font/google";
import "./globals.css";

const pixel = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Pixel Notes",
  description: "A simple Next.js note application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pixel.className}>{children}</body>
    </html>
  );
}

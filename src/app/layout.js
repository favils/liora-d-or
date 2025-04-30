import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Liora Fragrances",
  description: "Niche Perfumes",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

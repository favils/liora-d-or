import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Liora Fragrances",
  description: "Niche Perfumes",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

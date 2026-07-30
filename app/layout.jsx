import "./globals.css";

export const metadata = {
  title: "E-Cell VSSUT",
  description: "A Techno-Management Club of VSSUT Burla",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#05070B] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
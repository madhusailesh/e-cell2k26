import "./globals.css";

export const metadata = {
  title: "E-Cell VSSUT",
  description: "A Techno-Management Club of VSSUT Burla",
  icons: {
    icon: "/toplogo.png", // Yeh browser tab ke top par favicon set kar dega
    shortcut: "/toplogo.png",
    apple: "/toplogo.png",
  },
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